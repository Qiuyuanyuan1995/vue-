<template>
  <div class="login">
    <!-- 登陆表单 -->
    <!--  ref="loginForm" ref属性是用于下面可以取到该Dom元素 -->
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules1"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h1 class="title">
        <i class="el-icon-upload"></i>
        vuex登陆
      </h1>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//https://blog.csdn.net/ucxiii/article/details/80410830  用node.js的express做后台起服务
export default {
  data() {
    return {
      // 登陆表单的数据
      loginForm: {
        username: "",
        password: ""
      },
      // 验证规则
      rules1: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }, //长度验证
          { min: 5, max: 18, message: "长度在 5 到 18 个字符", trigger: "blur" } //非空验证
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 18, message: "长度在 5 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {  
      /*
      *<el-form
      :model="loginForm"
      status-icon
      :rules="rules1"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
      >
      * */
      //   ref="loginForm" 之前已经通过ref="loginForm"声明过了
      // var t = this.$refs[formName];
      // console.log(t.$el)
      // t.$el.style.border="2px solid red"
      // 通过$refs获取Dom元素
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 保留this
          let _this = this
          // 在main.js全局使用axios，在这里打印 console.log(this.axios)是证明axios在全局注册成功
          // console.log(this.axios)
          // alert("submit!");
          // 提交之前
          // 校验通过  拿到数据用户名和密码 发送请求到后台
          this.axios.post('/api/checklogin',{
              username:_this.loginForm.username,
              password:_this.loginForm.password
          })
          .then(response=>{
            console.log("接收后台响应登陆请求的数据",response.data)
          })
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body,
#app,
.login {
  height: 100%;
}
html {
  background-image: url("../assets/5.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.login {
  display: flex;
  /* 水平 垂直方向居中 */
  justify-content: center;
  align-items: center;
}
.el-form .title {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: white;
  padding: 20px 0 20px 60px;
}
</style>
