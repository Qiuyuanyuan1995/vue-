<template>
    <div class="customers container">
        <Alert v-if="alert" v-bind:message="alert"></Alert>
         <!-- <Alert message="alert"></Alert> -->
        <h1 class="page-header">用户管理系统</h1>
        <input type="text" class="form-control" placeholder="搜索" v-model="filterInput"> 
         <br>
        <table class="table table-striped">
             <thead>
                 <tr>
                     <th>姓名</th>
                     <th>电话</th>
                     <th>邮箱</th>
                     <th></th>
                 </tr>
             </thead>
              <tbody>
                  <!-- <tr v-for="customer in customers" :key="customer.id"> -->
                      <tr v-for="customer in filterBy(customers,filterInput)" :key="customer.id">
                      <td>{{customer.name}}</td>
                      <td>{{customer.phone}}</td>
                      <td>{{customer.email}}</td>
                      <td><router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link></td>
                  </tr>
              </tbody>
        </table>
    </div>
</template>
<script>
import Alert from './Alert'
export default {
    name:'customers',
    data(){
        return{
            customers:[],
            alert:"",
            filterInput:""

        }
    },
    methods:{
        // 搜锁方法
        fetchCustomers(){
            this.$http.get("http://localhost:3000/users")
            .then((res)=>{
                console.log(res)
                this.customers = res.data
            })
        },
        // value输入框里的值
        filterBy(customers,value){
              return customers.filter(function(customer){
                   return customer.name.match(value);
              })
        }
    },
    created(){
        if(this.$route.query.alert){
           this.alert = this.$route.query.alert;
        }
        this.fetchCustomers();
    },
    updated(){
        this.fetchCustomers();
    },
    components:{
        Alert
    }
}
</script>
<style scoped>

</style>
