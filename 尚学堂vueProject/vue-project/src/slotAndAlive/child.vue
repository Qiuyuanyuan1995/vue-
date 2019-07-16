<template>
  <div class="child">
    子组件
    <!--1.具名插槽 -->
    <slot name="s1"></slot>
    <hr>
    <slot name="s2"></slot>
    <!--2.单个插槽 -->
    <!-- <slot>如果没有传递视图，则显示我</slot> -->
    <!--3.作用域插槽：子组件：数据源，而父组件则有展示视图形式的权利
       注意：在2.5.0之前，必须使用到template身上，即在父组件接收子组件的slot
       传递过去的数据的标签之外嵌套一个template标签
       <template>
           <h1 slot-scope="props" slot="s3">
                       {{props.text}}
             </h1
       </template>
    -->
    <slot name="s3" text="我是插槽3，进行作用域插槽测试"></slot>
  </div>
</template>
<script>
export default {
  name: "child",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
