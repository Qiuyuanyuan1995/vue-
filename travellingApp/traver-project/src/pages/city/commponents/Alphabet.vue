<template>
  <ul class="list">
    <!-- v-for="(item,key) in cities" -->
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      @click="handleLetterCLick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "cityAlphabet",
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  props: {
    cities: Object
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterCLick(e) {
      //e.target.innerText 获取A~Z之间的字母
      //console.log(e.target.innerText)
      this.$emit("change", e.target.innerText);
    },
    //触摸开始
    handleTouchStart(e) {
      this.touchStatus = true;
    },
    //触摸改变
    handleTouchMove(e) {
      if (this.touchStatus == true) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // A字母距离 .search-input下边框的距离
          // const startY = this.$refs["A"][0].offsetTop;
          // console.log(startY);
          // e.touches[0].clientY是到.cityHeader的上边框的距离-(.search-input+.cityHeader)高度
          // touchY的高度是指手指滑动当前的字母到.search-input下边框的值
          const touchY = e.touches[0].clientY - 79;
          console.log(touchY);
          //除以20是因为每个字母的高度都是20px,这样就可以获取到当前手指在哪一个字母上，从而列表展示与字母相对应的列表
          const index = Math.floor((touchY - this.startY) / 20);
          console.log(index);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    //触摸结束
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
      // 返回的结果类似['A','B','C']
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
}

.item {
  line-height: 0.4rem;
  text-align: center;
  color: $bgColor;
}
</style>
