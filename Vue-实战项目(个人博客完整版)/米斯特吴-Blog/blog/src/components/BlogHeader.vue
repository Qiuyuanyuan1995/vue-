<template>
     <nav>
         <ul>
             <li>
                 <!-- router-link相当于a标签 -->
                 <!--关键字exact可以实现导航默认的背景色，点哪一个哪一个有默认色，其他颜色消失。-->
                 <router-link to="/" exact>博客</router-link>
                 <router-link to="/add-blog" exact>写博客</router-link>
             </li>
             </ul>
     </nav>
</template>
<script>
export default {
    name:"blog-header"
}
</script>
<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin:0;
}
li{
    display: inline-block;
    margin:0 10px;
}
a{
    color:#fff;
    text-decoration: none;
    padding:12px;
    border-radius:5px;
}
nav{
    background:crimson;
    padding:30px 0px;
    margin-bottom:40px;
}
/*.router-link-active是router-link自带的一个类名，可以查看元素 */
.router-link-active{
    background:rgb(255,255,255,0.8);
    color:#444
}
</style>


