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
            <el-menu class="el-menu-vertical-demo">
                <div v-for="(item,index) in routerData" :key="index">
                    <div v-if="item.children">
                        <template v-for="child in item.children">
                            <el-menu-item :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
                        </template>
                    </div>
                </div>
            </el-menu>
        </div>
        <router-view/>
  </div>
</template>

<script>
export default {
    data() {
        return {
		    routerData:JSON.parse(localStorage.getItem('defaultrouteList')),
            proName:'AI Home',
            userInfo: {
                name:'用户名',
            },
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    created(){
        console.log(JSON.parse(localStorage.getItem('defaultrouteList')))
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
<style lang="scss" scoped>
.index_body{ min-width: 1280px; height: 100%; overflow: hidden; overflow-x:auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0;  }
.header{line-height:60px;height:60px; background: rgb(19, 30, 48); position: absolute;top: 0; left:180px; right: 0; }
.header {
    .dept{
        color:#fff;
        float: left;
    }
    .msg{
        float: right;
        margin-right:20px;
        .photo{
            color:#fff;
        }
        .photo img{ width: 28px; height: 28px; vertical-align: middle; margin-right: 10px; }

    }
}
.menu{
    width:180px; 
    position: absolute; 
    top:0; 
    bottom: 0;
    background:rgb(19, 30, 48);
    z-index: 100;
    overflow: hidden;
    overflow-y:auto; 
    color:#fff;
    }

</style>

 