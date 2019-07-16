<template>
  <div id="app">
   <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import blogHeader from './components/BlogHeader'
export default {
  name: 'App',
  components:{
  //   'add-blog':AddBlog,
  //   'show-blog':ShowBlog
  'blog-header':blogHeader
  }
}
</script>
  
<style>
#app {
  
}
</style>
