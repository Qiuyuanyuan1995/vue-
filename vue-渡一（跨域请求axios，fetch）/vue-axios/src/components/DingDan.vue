<template>
  <div class="hello">
    <form id="main" v-cloak>
      <h1>Services</h1>
      <ul>
        <li v-for="service in services" :key="service.id" v-on:click="isActive(service)" v-bind:class="{'activeDefault':service.active}">
                {{service.name}}<span>{{service.price}}</span> 
        </li>
      </ul>
      <div class="total">Total:
        <span>{{total()}}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      services: [
        {
          name: "Web Development",
          price: 300,
          active: true
        },
        {
          name: "Design",
          price: 400,
          active: false
        },
        {
          name: "Java",
          price: 300,
          active: false
        },
        {
          name: "Andriod",
          price: 500,
          active: false
        }
      ]
    };
  },
  methods:{
    isActive:function(s){
        s.active = !s.active;
    },
    total:function(){
        var total= 0;
        console.log(this.services)
        // for(var i=0;i<this.services.length;i++){
        //   if(this.services.active==true){
        //       total+=this.services.price
        //   }
        // }
        this.services.forEach(function(s){
        		if (s.active){
        			total+= s.price;
        		}
        	});

        return total;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  隐藏未编译的变量 */

[v-cloak] {
  display: none;
}

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

/*-------------------------
    	订单表单
    --------------------------*/

form {
  background-color: #61a1bc;
  border-radius: 2px;
  box-shadow: 0 1px 1px #ccc;
  width: 400px;
  padding: 35px 60px;
  margin: 50px auto;
}

form h1 {
  color: #fff;
  font-size: 64px;
  font-family: "Cookie", cursive;
  font-weight: normal;
  line-height: 1;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}

form ul {
  list-style: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 15px;
}

form ul li {
  padding: 20px 30px;
  background-color: black;
  margin-bottom: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

form ul li span {
  float: right;
}

form ul li.activeDefault {
  background-color: pink;
}

div.total {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #fff;
}

div.total span {
  float: right;
}
</style>
