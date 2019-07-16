<template>
    <div class="parent">
         父组件
         <child>
             <!-- 具名插槽 -->
              <div slot="s1" style="border:1px solid blue">
                <p>我是插槽1</p>
                <p>在插槽下面又加了一个标签p</p>
             </div>
             <p slot="s2">我是插槽2</p>
             <!-- <p>我是测试插槽</p> -->
             <!-- 接收插槽3的传递过来的数据  slot-scope="props"-->
             <h1 slot-scope="props" slot="s3">
                       {{props.text}}
             </h1>
         </child>

    </div>
</template>
<script>
import child from '../slotAndAlive/child'
export default {
    name:"parent",
    data(){
        return{

        }
    },
    components:{
        child
    }
}
</script>
<style scoped>
/* 插槽的样式不管在父组件还是子组件中都可以设置 */
p{
    color:red;
}
</style>
