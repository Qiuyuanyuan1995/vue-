<template>
  <div>
    <app-header></app-header>
    <app-center v-bind:users1="users"></app-center>
    <app-footer></app-footer>
  </div>
</template>
<script>
import headers from "./header";
import centers from "./center";
import footers from "./footer";
export default {
  data() {
    return {
      users: [
        { name: "MiaoJie", position: "Web开发", show: false },
        { name: "MiaoJie", position: "Web开发", show: false },
        { name: "MiaoJie", position: "Web开发", show: false },
        { name: "MiaoJie", position: "Web开发", show: false },
        { name: "MiaoJie", position: "Web开发", show: false },
        { name: "MiaoJie", position: "Web开发", show: false },
        { name: "MiaoJie", position: "Web开发", show: false }
      ]
    };
  },
  components: {
    "app-header": headers,
    "app-center": centers,
    "app-footer": footers
  },
  // 生命钩子
  beforeCreate:function(){
    alert("beforeCreate组件实例化之前执行的函数")
  },
   Created:function(){
    alert("Created组件实例化完毕，但页面还未显示。执行的函数")
  },
  beforeMount:function(){
    alert("beforeMount组件挂载前，页面仍然未展示，但虚拟DOM已经配置")
  },
  mounted:function(){
    alert("mounted组件挂载之后，此方法执行后，页面显示")
  },
  beforeUpdate:function(){
    alert("组件更新前，页面仍未更新，但虚拟dom已经配置")
  },
  updated:function(){
    alert("组件更新，此方法执行后，页面显示")
  },
  beforeDestory:function(){
    alert("组件销毁前")
  },
  destoreyed:function(){
    alert("组件被销毁")
  }
};
</script>


<style scoped>
</style>



