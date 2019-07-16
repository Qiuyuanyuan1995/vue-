<template>
  <div class="hello">
    <router-link to="/article">点我进入article.vue页面</router-link>
    <br/><br/>
    <router-link to="/miehuoqi">点我进入miehuoqiVue页面</router-link>
    <br>
    <br>
    <router-link to="/complete">点我进入completeVue页面</router-link>
    <br>
    <br>
    <label for="r1">修改颜色</label>
    <input type="checkbox" v-model="isChangeColor">
    <p v-bind:class="{'changeColor':isChangeColor}">当checkBox的值为true的时候，我就变色，为false的时候，不变色。</p>
    <input type="checkbox" v-model="isColor">
    <div v-bind:class="{'bianSe':isColor}">渐变</div>
    <a v-bind:href="address">百度一下你就知道</a>
    <br>
    <br>
    <input type="text" placeholder="请输入字符串" v-model="txt">
    <br>
    <br>
    <button @click="reverseString()">点我，反转字符串</button>
    <br>
    <br>
    <p>反转之后的字符串：{{txt}}</p>
    <input type="text" v-on:keyup.enter="ensure()" placeholder="请输入内容">
    <!-- 导航 -->
    <div id="main">
      <!-- 激活的菜单样式为  active 类 -->
      <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->
      <nav v-bind:class="active">
        <!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->
        <a href="#" class="home" v-on:click="changeNav('home')">Home</a>
        <a href="#" class="projects" v-on:click="changeNav('projects')">Projects</a>
        <a href="#" class="services" v-on:click="changeNav('services')">Services</a>
        <a href="#" class="contact" v-on:click="changeNav('contact')">Contact</a>
      </nav>
      <!-- 以下 "active" 变量会根据当前选中的值来自动变换 -->
      <p>
        您选择了
        <b>{{active}} 菜单</b>
      </p>
    </div>
    <!--电影 -->
    <h4>{{movieTitle}} + {{movieDate}}</h4>
    <!-- if判断语句 控制显隐 -->
    <p v-if="items>12">有存货</p>
    <p v-else-if="items<5">存货不多，赶紧下手</p>
    <p v-else>没有存货，请补货</p>
    <p v-if="0">节点不在</p>
    <p v-show="0">节点还在，只是隐藏了</p>
    <!--v-cloak使用 v-cloak 防止页面加载时出现 {{list.name}} 的变量名 -->
		<!-- :key="list.id 独一无二的key值，会重新渲染模板-->
    <ul v-cloak v-for="list in list" :key="list.id">
      <li>{{ list.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isChangeColor: false,
      isColor: false,
      address: "http://www.baidu.com",
      txt: " ",
      active: "home",
      movieTitle: "猫妖转",
      movieDate: "2017",
			items: 20,
			list:[
				{name:'Lucy'},
				{
         name:'Bob'
				 },
				 {name:'Tom'},
			]
    };
  },
  methods: {
    reverseString: function() {
      // split()是字符串转为数组，reverse()是将数组反转，join()是把数组转为字符串
      this.txt = this.txt.split("").reverse().join("");
    },
    changeNav: function(item) {
      this.active = item;
    },
    ensure: () => {
      alert("I love you");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font: 15px/1.3 "Open Sans", sans-serif;
  color: #5e5b64;
  text-align: center;
}
a,
a:visited {
  outline: none;
  color: #389dc1;
}
a:hover {
  text-decoration: none;
}
section,
footer,
header,
aside,
nav {
  display: block;
}
nav {
  display: inline-block;
  margin: 60px auto 45px;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}
nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;
  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}
nav a:first-child {
  border-radius: 2px 0 0 2px;
}
nav a:last-child {
  border-radius: 0 2px 2px 0;
}
nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact {
  background-color: #e35885;
}
p {
  font-size: 22px;
  font-weight: bold;
  color: #7d9098;
}
p b {
  color: #ffffff;
  display: inline-block;
  padding: 5px 10px;
  background-color: #c4d7e0;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 18px;
}
.changeColor {
  background: red;
  color: white;
}
.bianSe {
  background: linear-gradient(rgb(226, 32, 210), yellow);
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
