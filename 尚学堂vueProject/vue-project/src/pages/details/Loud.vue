<template>
    <div>
       品牌营销:{{getTotalPrice}}
     
    </div>
</template>
<script>
export default {
    name:"loud",
    data(){
       return{
           
       }
    },
    computed:{
		getTotalPrice(){
			return this.$store.getters.getTotalPrice
		}
	}
}
</script>
<style scoped>

</style>
