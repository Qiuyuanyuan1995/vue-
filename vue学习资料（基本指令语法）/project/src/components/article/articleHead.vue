<template>
  <div class="animated zoomIn">
    <h1 v-cloak>{{title}}</h1>
     <span>
          {{authorName}}
        <span v-cloak>{{birthday}}</span>
     </span>
  </div>
</template>

<script>
//import moment from 'momment'

export default {
   //可复用组件，父组件向子组件传值通过prop；进行接收父组件传递的值
  props:["authorName","birthday"],
  // 父组件向子组件传值的类型只能是字符串类型 可以如下设置
  // props:{
  //     authorName:String;
  // },
  data() {
    return {
      title: "平凡的世界",
      
    };
  }
  // filters:{
  //      moment:function(value){
  //           return moment(value).fomat('MMMM Do')
  //            }
  // }
};
</script>
<style scoped>
div {
  background-color: pink;
}
</style>

