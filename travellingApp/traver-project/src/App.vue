<template>
  <div id="app">
  <!-- 怎样实现真机测试呢？
    在我们的vue中是不支持Ip地址访问的
    在packge.json中 的scripts的dev
     配置：--host 0.0.0.0
      192.168.10.51:8080生成二维码，手机通过二维码扫描之后即可在真机上测试
   -->
    <!-- exclude="Detail" 意思是说：不缓存detail.vue这个组件  -->
    <!-- 除了用exclude这个解决keep-alive组件缓存的方法还可以用activated()这个钩子函数 -->
    <keep-alive exclude="Detail">
      <!-- router-view显示的是当前路由地址所对应的组件 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
