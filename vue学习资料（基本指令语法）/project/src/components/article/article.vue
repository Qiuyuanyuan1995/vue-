<template>
  <div>
    <el-row>
      <el-button type="success" v-on:click="chartToggle=!chartToggle">chartToggle</el-button>
    </el-row>
    <br>
    <transition name="fade">
      <el-table
        v-if="chartToggle"
        :data="tableData"
        style="width: 100%;border:1px solid red"
      >
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </transition>

    <!--:authorName="author"如果把:号去掉，只会把author当做一个字符串传到子组件中去  -->
    <!-- 可复用组件，动态传值，父组件向子组件传值通过prop；进行接收父组件传递的值 -->
    <!--  
      <article-head :author-name="author"></article-head>
       
       假设上一句代码中的author-name="author"是以短线的形式，在Js代码中要以驼峰形式写变量名authorName

    -->
    <article-head :authorName="author" birthday="1995.04.28"></article-head>
    <article-center>
      <!-- 插槽，如果不写p标签的话，默认会把子组件中的slot里面的内容渲染到页面上 -->
      <!-- 把p标签 插到名为one的插槽上 -->
      <p slot="one">1</p>
      <p slot="two">2</p>
    </article-center>
    <article-footer></article-footer>
    <article-share @shared="fooShared($event,10)"></article-share>
    <p>分享次数：{{shareTime}}</p>
    <ul style="border:2px solid red;width:200px;height:100px">
      <li v-for="item in ziTofuMsg" :key="item.id">
            {{item.name}}:{{item.age}}
      </li>
    </ul>
  </div>
</template>
<script>
// 局部导入组件
import articleHead from "./articleHead";
import articleCenter from "./articleCenter";
import articleFooter from "./articleFooter.vue";
import articleShare from "./share";
export default {
  data() {
    return {
      ziTofuMsg:'',
      chartToggle: true,
      author: "路遥",
      shareTime: 0,
      msg: "我是一个新组件",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  // 局部注册组件
  components: {
    "article-head": articleHead,
    "article-center": articleCenter,
    "article-footer": articleFooter,
    "article-share": articleShare
  },
  methods: {
    fooShared(event, age) {
      // console.log(event);
      this.ziTofuMsg = event;
      // console.log(this.ziTofuMsg)
      // console.log(age)
      this.shareTime++;
    }
  },
  // 生命钩子
  // beforeCreate:function(){
  //   alert("beforeCreate组件实例化之前执行的函数")
  // },
  //  Created:function(){
  //   alert("Created组件实例化完毕，但页面还未显示。执行的函数")
  // },
  // beforeMount:function(){
  //   alert("beforeMount组件挂载前，页面仍然未展示，但虚拟DOM已经配置")
  // },
  // mounted:function(){
  //   alert("mounted组件挂载之后，此方法执行后，页面显示")
  // },
  // beforeUpdate:function(){
  //   alert("beforeUpdate组件更新前，页面仍未更新，但虚拟dom已经配置")
  // },
  // updated:function(){
  //   alert("updated组件更新，此方法执行后，页面显示")
  // },
  // beforeDestory:function(){
  //   alert("beforeDestory组件销毁前")
  // },
  // destoreyed:function(){
  //   alert("destoreyed组件被销毁")
  // }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>

