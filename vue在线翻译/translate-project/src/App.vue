<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单/翻译/便捷</h5>
    <translate-form v-on:formSth="translateText"></translate-form>
    <translate-output v-text="translatedAfterText"></translate-output>
  </div>
</template>

<script>
// https://tech.yandex.com/  翻译API
import translateForm from "./components/TranslateForm";
import translateOutput from "./components/TranslateOUtput"
export default {
  name: "App",
  data(){
   return{
    //  应经翻译好的语句
       translatedAfterText :"",
   }
  },
  // 注册组件 要用components 要有s
  components: {
    "translate-form": translateForm,
    "translate-output":translateOutput
  },
  methods: {
    // text 作为形参，接收子组件传过来的数据this.textToTranslate
    translateText: function(text,language) {
      // alert("我是接收子组件数据的方法")
      // alert(text)
      console.log(language)
      this.$http
        .get(                                                                                                                                                   
          'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190102T063837Z.6c75df6cfb14a1e9.1909679b04a3603d8104ef6cbd7e0479f05bab59 &lang='+language+' &text=' +text)
        .then(response => {
          // 翻译之后的语句
          // console.log(response.body.text[0]);
          this.translatedAfterText = response.body.text[0]
        });
    }
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
