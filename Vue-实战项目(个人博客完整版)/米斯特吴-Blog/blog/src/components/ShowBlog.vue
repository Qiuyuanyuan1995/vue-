<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>

      <article>
        <!-- snippet小片，片段 -->
        {{blog.content | snippet }}
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // 本地的json文件建议放到static文件夹内，要不然访问不到
    //1.请求本地的文件json
    // this.$http.get("../../static/showBlog.json")
    //2.请求的是远程接口placeholder json
    //this.$http.get("https://jsonplaceholder.typicode.com/posts")
    //3.野狗远程接口 https://wd5771860357xkxqic.wilddogio.com/
    this.$http
      .get("https://wd5771860357xkxqic.wilddogio.com/posts.json")
      .then(function(data) {
        console.log(data);
        // console.log(data.json())
        // 由于使用野狗接口 返回的是对象数据，所以先解析,用json()
        return data.json();
        //利用数组 slice()方法截取10条数据
        /*
         *当接口换成野狗的接口data.body就不是一个数组了，而是一个对象，所以此时在直接
         *用slice()数组的方法是不可以的，所以为了解决这个问题，首先把后台返回来的对象
         *数据转换为数组。
         *
         *  */
        // this.blogs = data.body.slice(0,10)
        // console.log(this.blogs)
      })
      .then(function(data) {
        //  console.log(data)
        //  把return回来的data.json(),放到数组里
        var blogsArray = [];
        //用for...in遍历对象
        for (let key in data) {
          // console.log(key)
          // 打印每一个对象
          console.log(data[key]);
          // var categeriObj = data[key].categories;
          // console.log(categeriObj);
          // 给每一对象里面添加id属性
          data[key].id = key;
          //然后把已经添加id的对象添加到blogsArray数组里
          blogsArray.push(data[key]);
          //  blogsArray.push(categeryArr);
           console.log(blogsArray)
          //  console.log(blogsArray[0])
          //  console.log(blogsArray[0].categories)
          // 判断是否是数组类型
          //  console.log( Array.prototype.isPrototypeOf(blogsArray[0].categories))
          this.blogs = blogsArray;
        }
      });
  },
  computed: {
    filteredBlogs: function() {
      //这里的filter是es6里的filter方法
      return this.blogs.filter(blog => {
        //   console.log(blog)
        //match是es6里面的方法 以blog的title和输入框里输入的数进行匹配，匹配上了就展示，没有匹配上就展示全部
        return blog.title.match(this.search);
      });
    }
  },
  // 局部自定义指令
  directives: {
    rainbow: {
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
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgb(216, 203, 203);
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>


