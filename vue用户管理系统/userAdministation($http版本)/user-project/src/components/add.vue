<template>
    <div class="add container">
        <Alert v-if="alert" v-bind:message="alert"></Alert>
        <h1 class="page-header">添加用户</h1>
        <form v-on:submit="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name"> 
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" class="form-control" placeholder="edcation" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label>毕业学校</label>
                    <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" class="form-control" placeholder="profession"  v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <!-- <input type="text" class="form-control" placeholder="profile"> -->
                    <textarea  class="form-control" rows="10" v-model="customer.profile"></textarea>
                </div>
                <!-- 给button元素的type类型设置为submit 系统会自动提交表单；但在<form v-on:submit="addCustomer">元素里有v-on:submit="addCustomer"会执行自己写的addCustomer方法 -->
                <button type="submit" class="btn btn-primary">添加</button>
            </div>
        </form>
    </div>
</template>
<script>
import Alert from './Alert'
export default {
    data(){
        return{
            customer:{},
            alert:''
        }
    },
    methods:{
        //  因为 <button type="submit" class="btn btn-primary">添加</button> type的类型为submit所以要
        // 在addCustomer方法中传e，阻止默认事件
        addCustomer(e){
            // console.log(11)
            // 名字，电话,邮箱任何一个都不能为空不能为空
            if(!this.customer.name || !this.customer.phone || !this.customer.email){
                this.alert ="请添加对应的信息"
            }else{
                let newCustomer = {
                    name:this.customer.name,
                    phone:this.customer.phone,
                    email:this.customer.email,
                    education:this.customer.education,
                    graduationschool:this.customer.graduationschool,
                    profession:this.customer.profession,
                    profile:this.customer.profile
                }
                this.$http.post("http://localhost:3000/users",newCustomer)
                .then(function(res){
                    // console.log(res)
                    this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}})
                })
                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    components:{
        Alert
    }
}
</script>
<style scoped>

</style>
