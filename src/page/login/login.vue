<template>
  <div class="login">
      <div class="loginContainer">
      <div class="leftContainer">
      </div>
      <div class="rightContainer">
          <div class="rightMain">
              <div class="bigtitle">账号密码登录</div>
                <el-form class="formContainer" :model="form" :rules="rules" ref="form">
                    <el-form-item  prop="phone" >
                        <div>用户名</div>
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item  prop="password">
                        <div>密码</div>
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item >
                    <!-- <el-form-item prop="captcha" >
                        <div>图片验证码</div>
                        <div class="imgContainer">
                            <el-input v-model="form.captcha" @keyup.enter.native="submit()" class="captcha"></el-input>
                            <img class="img" :src="codeImg" />
                            <span @click="codeFun" class="changeOne">换一张？</span>  
                        </div>
                    </el-form-item> -->
                    <el-form-item class="btnContainer">
                        <el-button class="loginBtn" @click="submit()">登录</el-button>
                    </el-form-item>
                        <!-- <div class="forget" @click="gopasswordBack()">忘记密码？</div> -->
                </el-form>
            </div>  
        </div>
    </div>   
  </div>
</template>

<script>
export default {
  data () {
    return {
        form:{
            phone:'',
            password:'',
        },
        rules:{
            phone:[
                { validator:validatePhone,tigger:'blur' }
            ],
            password:[
                { validator:validatePw,tigger:'blur' }
            ],
            captcha:[
                { validator:validatecaptcha,tigger:'blur' }
            ]
        },
    }
  },
  methods:{
    add(){
      console.log('122');
    },
    submit(){
        this.$router.push({path:"/dashed"})
    }

  },
}
</script>
<style scoped>
</style>
