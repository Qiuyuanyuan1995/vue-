<template>
    <div>
        smallOne
        {{msg}}
        <button @click="changeInfo">changeInfo</button>
    </div>
</template>
<script>
export default {
    name:"smallOne",
    data(){
        return{
             msg:"测试1"
        }
    },
    methods:{
        changeInfo(){
              this.msg = "测试11111111111111"
        }
    }
}
</script>
