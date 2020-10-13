<template>
    <div class="index_body">
        <div class="header">
            <div class="dept">
                <span class="depttitle">{{proName}}</span>
            </div>
            <div class="msg">
                <el-dropdown>
					<span class="el-dropdown-link">
						<span class="photo">
                            <img src="../img/photo.png" alt="">
                            {{userInfo.name}}
                        </span>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><el-button @click="loginOut" type="text">退出</el-button></el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
            </div>
        </div>
        <div class="menu">
            <!-- <el-menu>
                <div></div>

            </el-menu> -->

        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            proName:'AI Home',
            userInfo: {
                name:'张三三',

            },
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    created(){
        console.log(localStorage.getItem('gaRouterList'))
    },
    methods:{
        
        loginOut(){
            console.log('推出')
        },
        handleSelect(key, keyPath){
            console.log(key, keyPath);
        }
    }

}
</script>
<style>
.index_body{
    width:1280px
}
</style>

 