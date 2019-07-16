<template>
    <button @click="share">分享到微信</button>
</template>
<script>
export default {
    data(){
        return{
            arr:[
            {name:'tom',
             age:9
            },
            {
                name:'lucy',
                age:12
            },{
                name:'xiLa',
                age:12
            }

            ]

        };
    },
    methods:{
       share() {
        //this代表当前组件实例
        //shared自定义事件名字
        //    this.$emit("shared",{name:'Tom'})
           this.$emit("shared",this.arr)
       }
    }
}
</script>
 <style scoped>
   /* font-size:.75rem; */
 </style>
 
