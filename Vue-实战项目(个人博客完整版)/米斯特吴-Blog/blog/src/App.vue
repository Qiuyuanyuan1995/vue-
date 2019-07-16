<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view/>
  </div>
</template>

<script>
import blogHeader from "./components/BlogHeader";
export default {
  name: "App",
  components: {
    "blog-header": blogHeader
  }
};
</script>

<style>
</style>
