<template>
    <div>
     开放产品
    地球
    <h1>{{getOrder}}</h1>

    </div>
</template>
<script>
export default {
    name:"earth",
    data(){
       return{
           
       }
    },
    computed:{
         getOrder(){
            //   return this.$store.dispatch("updateOrder")
            return this.$store.getters.getOrder
         }
    }
}
</script>
<style scoped>

</style>
