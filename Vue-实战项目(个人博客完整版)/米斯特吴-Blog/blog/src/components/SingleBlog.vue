<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.writer}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <router-link :to="'/edit/'+ id">
         编辑
    </router-link>
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
    //请求的是远程接口placeholder json
    //this.$http.get("https://jsonplaceholder.typicode.com/posts/"+ this.id)
    //野狗远程接口https://wd5771860357xkxqic.wilddogio.com/
    this.$http
      .get(
        "https://wd5771860357xkxqic.wilddogio.com/posts/" + this.id + ".json"
      )
      .then(function(res) {
        //    console.log(this.id)
        console.log(res);
        //  this.blog = res.body
        return res.json();
      })
      .then(function(res) {
        this.blog = res;
      });
  },
  methods: {
    deleteSingleBlog() {
      this.$http
        .delete(
          "https://wd5771860357xkxqic.wilddogio.com/posts/" + this.id + ".json"
        )
        .then(res => {
          alert("删除成功");
          this.$router.push({ path: "/" });
        });
    }
  }
};
</script>
<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 1.25rem;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>

