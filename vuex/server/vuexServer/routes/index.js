var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/checklogin', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//接收前端发来的请求
// req:请求对象
// res：响应对象
router.post('/checklogin',(req,res)=>{
  res.send("SUCCESS !!!")
  // 接收用户名和密码
  let {username,password} = req.body;
  console.log(username,password)
  // res.send("请求后台接口成功！！！")
  // 去 数据库查询是否存在这个密码和用户名
})
module.exports = router;
