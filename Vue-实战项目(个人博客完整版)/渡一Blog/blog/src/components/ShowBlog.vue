<template>
  <!-- v-theme自定义指令 :column是参数，就好比v-on:click 中的click
  就是一个参数-->
  <div v-theme:column="'wide'" id="show-blog">
    <h1>博客总览</h1>
    <!-- 实现搜索功能 -->
    <input type="text" v-model="search" placeholder="请输入关键字进行搜索...">
    <!--v-for="blog in blogs" 这时候就不能有blogs了，要改成filteredBlogs，这样才会触发computed中过得方法  -->
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <!-- 自定义指令 v-rainbow 
            2种情况：第一种情况是：不给值的情况
      -->
      <router-link :to="'/blog/'+ blog.id">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link> 
      <article>{{blog.content | snipet}}</article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // get请求远程数据
    // this.$http.get('https://jsonplaceholder.typicode.com/posts')
    //1. get请求本地数据  
    // this.$http.get("../../static/get.json").then(function(res) {
      // console.log(res)
      // 从后台取前10条数据
      // this.blogs = res.body.slice(0, 10);
      //  console.log(this.blogs)
    // });
    //2. 请求野狗数据库从页面写入的数据
    this.$http.get("https://wd5771860357xkxqic.wilddogio.com/posts.json")
    .then(function(res){
      // console.log(res.json());
      // 返回从野狗数据库获取的数据 是对象
      return res.json()
    })
    // 然后将返回的对象数据放到数组里 
    .then(function(data){
      // console.log(data)
      var blogsArray = [];
      // for in遍历对象
      for(let key in data){
            // console.log(key)
            // 打印每个key值
            // console.log(data[key])
            // 给每一个对象添加一个id值
            data[key].id = key;
            blogsArray.push(data[key])

      }
    // console.log(blogsArray)
    this.blogs = blogsArray
    // console.log(this.blogs)
    })
  },
  // 实现过滤的功能
  computed: {
    // filteredBlogs这个方法拿到this.blogs所有的信息，然后用每一条信息的title
    //进行匹配 ，只要和input输入框中的内容向匹配就展示出来
    filteredBlogs: function() {
      // filter() es6的函数
      // console.log(this.blogs);
      return this.blogs.filter(b => {
        // console.log(b);
        //如果查到信息就展示，没查到就展示所有信息
        //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
        // match(this.search) 中的this.search拿到输入框中的值
        return b.title.match(this.search);
      });
    }
  },
  // 局部的过滤器
  filters: {
    // "to-uppercase":function(value){
    //     return value.toUpperCase();
    // }
    // 更简洁的写法
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  // 局部自定义指令
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        //  el：元素标签
        // binding:绑定
        // vnode:虚拟节点
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }

  
};
</script>
<style scoped>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #999;
  border:1px dotted #aaa;
}
#show-blog a {
    color:#444;
    text-decoration: none;
}
input[type="text"]{
    padding:8px;
    width:100%;
    box-sizing: border-box;
}
</style>



