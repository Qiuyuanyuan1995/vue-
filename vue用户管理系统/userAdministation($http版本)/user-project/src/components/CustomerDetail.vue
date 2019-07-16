<template>
    <div class="details container">
        <router-link to="/" class="btn btn-default">返回首页</router-link>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                 <router-link class="btn btn-primary" :to="'/edit/'+customer.id">
                     编辑
                 </router-link>
                 <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
            </span>     
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone"> {{customer.phone}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{customer.email}}</span></li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-user"> {{customer.education}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-queen"> {{customer.graduationschool}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-film"> {{customer.profession}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-home"> {{customer.profile}}</span></li> 
       
        </ul>
    </div>
</template>
<script>
export default {
    name:'customerDetails',
    data(){
        return{
         customer:""
        }
    },
    methods:{
        fetchCustomers(id){
            this.$http.get("http://localhost:3000/users/"+id)
            .then(function(res){
                console.log(res)

                  this.customer = res.body
            })
        },
        deleteCustomer(id){
            // alert(id)
            this.$http.delete("http://localhost:3000/users/"+ id)
            .then(function(res){
                this.$router.push({path:"/",query:{alert:"用户删除成功！"}})
            })
        }
    },
    created(){
         this.fetchCustomers(this.$route.params.id)
    }
}
</script>
<style scoped>

</style>
