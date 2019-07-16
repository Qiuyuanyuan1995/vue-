<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!isSubmmited">
      <label for>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <br>
      <br>
      <label for>博客内容</label>
      <br>
      <textarea  v-model="blog.content" cols="30" rows="10"></textarea>
      <div id="chekboxes">
        <label for>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for>reat.js</label>
        <input type="checkbox" value="reat.js" v-model="blog.categories">
        <label for>angular.js</label>
        <input type="checkbox" value="angular.js" v-model="blog.categories">
      </div>
      <label for>作者：</label>
      <!-- 怎样确定下拉选择框选择了相对应的选项，并且选择哪一个就展示哪一个，只要绑定v-model即可实现 -->
      <select v-model="blog.author1">
        <option v-for="authour in authours" :key="authour.id">{{authour}}</option>
      </select>
      <!--  @click.prevent阻止刷新页面 -->
      <button @click.prevent="post">添加博客</button>
    </form>
    <br>
    <!-- 当点击发布  则上面的内容隐藏，下面的内容显示 -->
    <div v-if="isSubmmited">
      <h3>您的博客发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p style="color:red">博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p style="color:purple">{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
      </ul>
      <p style="color:blue">作者:{{blog.author1}}</p>
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
        author1: ""
      },
      authours: ["鲁迅", "路遥", "史铁生"],
      isSubmmited: false
    };
  },
  methods: {
    post: function() {
      // 模拟请求
      //1.根据placeholder进行数据的请求发送 发送请求的网址 http://jsonplaceholder.typicode.com/
      // http://jsonplaceholder.typicode.com/posts
      // this.$http
      //   .post("http://jsonplaceholder.typicode.com/posts", {
      //     title: this.blog.title,
      //     body: this.blog.content,
      //     userId: 1
      //   })
      //2.野狗数据库
      //用野狗进行数据的发送 https://www.wilddog.com/console/wd5771860357xkxqic
      this.$http
        .post("https://wd5771860357xkxqic.wilddogio.com/posts.json",this.blog)
        // 请求成功执行的方法
        .then(function(data) {
          console.log(data);
          console.log(this.blog.categories);
          this.isSubmmited = true;
        });
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
#chekboxes label {
  display: inline-block;
  margin-top: 0px;
}
#chekboxes input {
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


