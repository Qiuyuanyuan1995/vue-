<template>
  <h1>Admin</h1>
</template>

<script>
export default {
  
  data() {
    return {
      name: "Henry"
    };
  },
  // 路由的组件内守卫
  //  该方法访问不到data里面的数据，因为beforeRouteEnter()方法比data()先执行，所以
  // 下面会弹出  你好 undefined,但是next()回调函数则可以实现;next()是异步的
  // 进入组件之前做的事情
  // beforeRouteEnter:(to,from,next)=>{
  //   // alert("你好" + this.name)
  //   next(vm=>{
  //       alert("你好" + vm.name)
  //   })
  // },
  // 离开组件的时候做的事情
  // beforeRouteLeave:(to,from,next)=>{
  //   if(confirm("确定离开吗？")==true){
  //       next()
  //   }else{
  //     next(false)
  //   }
  // }
}; 
</script>


