<!--
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-11 15:58:27
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-12 15:22:38
 * @FilePath: \vsFile\mymi\src\views\user\Login.vue
 -->
<template>
  <div>
    <h1>登录</h1>

    <van-form @submit="login">
      <van-cell-group inset>
        <van-field
          v-model="user.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
    };
  },
  /*post: url:https://520mg.com/member/index_login.php
	  data： {
			userid: '',
			pwd: '',
			fmdo: "login",
			dopost: "login",
		}
	  headers: { 'content-type': 'application/x-www-form-urlencoded' } 
	
	  qs.stringify({name:'张三',age:20})  ====    "name=张三&age=20"
	  qs.parse("name=张三&age=20")       =====  {name:'张三',age:20}
	  
	  接口地址: http://dida100.com:8888/api/login
	  	请求类型：post
	  	请求参数：{"name": "zeng8", "password": "zmm123" }
	*/
  methods: {
    login() {
      this.$http
        .post("http://dida100.com:8888/api/login", {
          name: this.user.name,
          password: this.user.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 200) {
            let from = this.$route.query.from;
            // 存token
            localStorage.token = res.data.token;
            this.$router.push(from).catch((err) => {
              console.log(err);
            });
          }
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>