<template>
  <div>
    big视图
        <!-- keep-alive进行缓存：
        使用情景：如果需要实时更新则不可以用keep-alive
        死数据可以使用keep-alive进行缓存
        -->
    <keep-alive>
      <!-- 通过绑定is进行视图的切换 -->
      <component :is="currentView"></component>
    </keep-alive>
    <button @click="changeView">利用keep-allive缓存切换组件</button>
  </div>
</template>
<script>
import smallOne from "./smallOne";
import smallTwo from "./smallTwo";
export default {
  name: "big",
  data() {
    return {
      currentView: "smallOne",
      flag: true
    };
  },
  components: {
    smallOne,
    smallTwo
  },
  methods: {
    changeView() {
      if (this.flag) {
        this.currentView = "smallOne";
        this.flag = false;
      } else {
        this.currentView = "smallTwo";
        this.flag = true;
      }
    }
  }
};
</script>
