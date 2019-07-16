<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <!-- {{this.doubleCity}} -->
        <!-- {{this.$store.state.city}} -->
        <span class="iconfont">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "headers",
  data() {
    return {};
  },
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"])
  }
  // props: {
  //   city: String
  // }
};
// html{font-size:50px} 在reset.css文件中定义
// 1rem = html font-size = 50px
// 86px/100 = 0.86rem
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  line-height: 0.86rem;
  display: flex;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
  }
}

.back-icon {
  text-align: center;
  font-size: 0.4rem;
}

.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
  color: #ccc;
}

.header-right {
  min-width: 1.04rem;
  padding: 0 0.1rem;
  float: right;
  text-align: center;
  color: #fff;
}

.arrow-icon {
  font-size: 0.24rem;
  margin-left: -0.04rem;
}
</style>
