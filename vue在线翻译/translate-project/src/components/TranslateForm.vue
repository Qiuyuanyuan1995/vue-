<template>
  <div id="translateForm">
    <form v-on:submit="formSubmit">
      <input v-model="textToTranslate" type="text" placeholder="请输入需要翻译的内容">
      <select v-model="language">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
        <option value="ru">Russian</option>
        <option value="ko">Korean</option>
        <option value="ja">Japanese</option>
      </select>
      <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>
export default {
  name: "translateForm",
  data: function() {
    return {
      textToTranslate: "",
      language: ""
    };
  },
  methods: {
    formSubmit: function(e) {
      //   取消默认事件 比如submit的刷新页面
      e.preventDefault();
      //  子组件向父组件传值
      // $emit("参数1",参数2) 参数1:代表的是自定义事件的名称，第二个参数是要传递的数据
      this.$emit("formSth", this.textToTranslate, this.language);
      // alert(this.textToTranslate)
    },
  },
//   默认选中英语这个语种进行翻译
  created:function(){
        this.language="en"
    }
};
</script>

<style>
</style>
