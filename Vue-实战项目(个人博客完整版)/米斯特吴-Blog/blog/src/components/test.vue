<template>
  <div class="hello">
    <h2>我是主界面</h2>
    <!-- <h2>我是最大值{{maxNumber}}</h2>
    <h2>我是最小值{{minNumber}}</h2> -->
    <table class="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model='selectAll'/>
          </th>
          <th class="account">{{$t('m.Account')}}</th>
          <!-- <th class="departName">{{$t('m.Department_Name')}}</th> -->
          <th class="realName">{{$t('m.User_Name')}}</th>
          <!-- <th class="roleName">{{$t('m.Role_Name')}}</th> -->
          <!-- <th class="status">{{$t('m.Status')}}</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in userList" :key="index">
          <td>
            <input type="checkbox" :value="item.id" v-model='checkedIds' />
          </td>
          <td @click="editUser(item.id)" class="accountEdit account">
            <a class="hoverStyle">{{ item.account }}</a>
          </td>
          <!-- <td class="departName"><span v-show="item.parentDeptName">{{item.parentDeptName}}/</span>{{ item.deptName||''}}</td> -->
          <td class="realName">{{ item.userName }}</td>
          <!-- <td class="roleName">{{ item.roleName }}</td> -->
          <!-- <td class="langCodeNoClass status">{{$t('m.'+ statusChange(item.status))}}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import mixins from 'assets/js/mixins'
export default {
  mixins:[mixins],
  name: 'authority',
  data () {
    return {
      checkedIds:[],
      userList:[
          {id:1,account:'mike1',userName:'mikea',roleName:'经理1',status:0},
          {id:2,account:'mike2',userName:'mikeb',roleName:'经理2',status:2},
          {id:3,account:'mike3',userName:'mikec',roleName:'经理3',status:1},
          {id:4,account:'mike4',userName:'miked',roleName:'经理4',status:0},
      ],
      maxNumber:0,
      minNumber:0,
    }
  },
  methods:{
    getDepartmentUser(departmentId){
      let vm=this;
      let url='/user/deptUserList';
      var params = {
          departmentId:departmentId
      }
      this.ajaxSend(url,params).then((data)=>{
          vm.userList=data.payload.results.users;
      });
    },
  },
  computed: {
    selectAll: {
      get() {
        //判断列表数组是否为空数组，如果是的话，全选默认为不选中，优化初始无数据的空数组被选中问题
        return (this.userList&&this.userList.length>0) ? this.checkedIds.length == this.userList.length : false;
      },
      set(value) {
        var checkedIds = [];
        if (value) {
          this.userList.forEach(function (index) {
            checkedIds.push(index.id);
          });
        }
        this.checkedIds = checkedIds;
      }
    }
  },
  mounted(){
    // this.maxNumber = Number.MAX_VALUE;
    // this.minNumber = Number.MIN_VALUE;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>