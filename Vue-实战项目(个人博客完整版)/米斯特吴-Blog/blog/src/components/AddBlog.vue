<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content" cols="30" rows="10"></textarea>
      <p>博客分类</p>
      <div id="checkboxes">
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Vue.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories">
        <label>Angular.js</label>
      </div>
      <label>作者：</label>
      <select v-model="blog.writer">
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
      <!-- .prevent阻止刷新 -->
      <button v-on:click.prevent="addBlogPost()">添加博客</button>
    </form>
    <div v-if="submmited">
        <h3>你的博客发布成功！</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul v-for="category in blog.categories" :key="category">
        <li>{{category}}</li>
      </ul>
      <p>作者：{{blog.writer}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
         // 在这里声明一个空数组，并且把这个数组绑定到checkbox元素上，就可实现点击某一个单选框，就会把相对应的值传过去
        categories: [],
       // 默认给一个空值，这样下拉框就默认谁也不选中
        writer: ""
      },
      authors: ["Tom", "Lucy", "Lily"],
      submmited:false
    };
  },
  methods: {
    addBlogPost: function() {
      // http://jsonplaceholder.typicode.com/
      // http://jsonplaceholder.typicode.com/posts
      // 发送post请求
      // this.$http.post("http://jsonplaceholder.typicode.com/posts",{
      //     title:this.blog.title,
      //     body:this.blog.content,
      //     userId:1
      // })
      // 野狗接口
      this.$http.post("https://wd5771860357xkxqic.wilddogio.com/posts.json",this.blog)
      .then(function(data){
          this.submmited = true;
          
          // console.log(data)       
        //  console.log( Array.prototype.isPrototypeOf(t.categories))
      })
    }
  }
};
</script>
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  font-size: 18px;
  padding: 14px;
  border-radius: 4px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #999;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>


