<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // fetch 两种跨域方法 在config下的index.js文件中进行配置 解决跨域 proxyTable
    // fetch   http://f.apiplus.cn/bj11x5.json
    // fetch("/apis/bj11x5.json",{
    //   method:"post",
    //   headers:{
    //     "Content-type":"application/json"
    //   }
    // })
    // .then(result=>{
    //   console.log(result)
    //   return result.json()
    // })
    // .then(data=>{
    //   console.log(data)
    // })
  // axios 方法进行跨域
 this.$axios.post("/apis/bj11x5.json")
 .then(data=>{
   console.log(data)
 })
           

  }
     
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
