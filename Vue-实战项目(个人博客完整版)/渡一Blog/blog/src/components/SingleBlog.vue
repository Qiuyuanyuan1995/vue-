<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author1}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
    </ul>
    <button @click="deletSingleBlog()">删除</button>
  <router-link :to="'/edit/'+id">编辑</router-link>
  </div>
</template>
<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    // this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
    //野狗数据库的请求地址 https://wd5771860357xkxqic.wilddogio.com/posts.json
    this.$http
      .get(
        "https://wd5771860357xkxqic.wilddogio.com/posts/" + this.id + ".json"
      )
      .then(function(data) {
        // 返回的data是一个对象，现在把返回的data放到 blog:{}对象里
        // console.log(data);
        // this.blog = data.body;
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
        console.log(this.blog);
      });
  },
  methods: {
    deletSingleBlog() {
      this.$http
        .delete("https://wd5771860357xkxqic.wilddogio.com/posts/" + this.id + ".json")
        .then(res => {
            this.$router.push({path:'/'})
        });
    }
  }
};
</script>
<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>

