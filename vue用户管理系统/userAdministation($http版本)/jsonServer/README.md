//获取所有用户信息
http://localhost:3000/users
//获取 id为1 单个的用户信息
http://localhost:3000/users/1
//获取公司的所有信息
http://localhost:3000/companies
//获取公司id为1 的单个信息
//http://localhost:3000/companies/1
//获取所有公司id为3的用户
http://localhost:3000/companies/3/users
//根据公司名字获取信息
http://localhost:3000/companies?name=Mycrosoft
//根据多个公司名字获取公司信息
http://localhost:3000/companies?name=Mycrosoft&name=Apple
//获取一夜中只有两条数据
http://localhost:3000/companies?_page_1&_limit=2
//根据公司的名字进行升序排序 asc升序  desc降序
http://localhost:3000/companies?_sort=name&_order=asc
//获取用户年龄大于等于30岁的用户
http://localhost:3000/users?age_gte=30
//获取年龄在30~40之间的用户
http://localhost:3000/users?age_gte=33&age_let=40
//搜索用户信息 名字是Henry的用户信息
http://localhost:3000/users?q=Henry

