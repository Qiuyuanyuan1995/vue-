<template>
  <div class="row">
    <!-- 路由的滚动行为 -->
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizz!!!</h1>
        <h2>这里有你非常喜欢的pizz!</h2>
        <button class="btn btn-success" v-on:click="goToMenu">Let's order</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToMenu() {
      // 跳转到上一次浏览的界面
      // this.$router.go(-1)
      // 指定跳转的地址
      // this.$router.replace('/login')
      // 制定跳转路由的名字下
      // this.$router.replace({name:'Login'})
      // 通过push进行跳转
      // this.$router.push('/login')
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style scoped>
#home{
  background:url('../assets/pizaa.jpg');
  height: 85vh;
  padding:10%;
  background-repeat: no-repeat;
}
h1,h2{
    margin:6%
}
.background{
background:#eee;
opacity: 0.8;
/* vw单位在谷歌浏览器支持的比较好，其他浏览器支持度不是很好 */
max-width: 40vw;
margin:0 auto;
padding:20px 0;
}
</style>

