<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li v-show="hasNoData" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
// 引用better-scroll插件:是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "citySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit('gaiBianCity',city)
      // this.$router.push('/')
      this.gaiBianCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["gaiBianCity"])
  },
  props: {
    cities: Object
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search 
  height: 0.72rem
  background: $bgColor
  padding: 0 0.1rem


.search-input 
  height: 0.62rem
  line-height: 0.62rem
  width: 100%
  text-align: center
  border-radius: 0.06rem
  color: #666


.search-content 
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  z-index: 1


.search-item 
  line-height: 0.62rem
  padding-left: 0.2rem
  color: #666
  background: #fff

</style>
