
<template>
  <!-- 
渡一课堂的的 vue代码
gitHub地址:https:github.com/hemiahwu/vueplaylist
20课是一个完整的 路由demo
  -->
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <!-- 在这里展示组件 -->
    <div class="container">
      <!-- 路由对应的视图 -->
      <router-view></router-view>
      <!--<router-view></router-view> 增加内容为的是实现路由滚动行为，到Let's order按钮  -->
      <!-- <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view>-->
    </div>
    <!-- router-view复用 -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4" style="border:3px solid red;">
          <router-view name="ordering"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  data() {
    return {};
  },
  components: {
    "app-header": Header
  }
};
</script>

<style>
</style>
