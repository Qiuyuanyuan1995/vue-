<template>
      <div id="translateOutput">
         <h2>
             {{textToTranslate}}
         </h2>
      </div>
</template>
<script>
export default {
    name:"translateOutput",
    props:["textToTranslate"]
}
</script>
<style scoped>
#translateOutput{
    margin-top:20px;
    color:red;
}

</style>



