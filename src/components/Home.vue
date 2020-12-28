<template>
  <div class="index_body">
    <div class="header">
      <div class="dept">
          <el-tooltip class="item"
                      effect="dark"
                      :content="tooltip"
                      placement="right">
            <i :class="toggleIcon"
              id="toggle"
              @click="toggle">
            </i>
          </el-tooltip>
        <span class="depttitle">
          {{ proName }}
        </span>
      </div>
      <div class="msg">
        <el-dropdown>
             <span class="el-dropdown-link">
                <span class="photo">
                <img src="../img/photo.png" alt="" />
                <!-- {{ userInfo.name }} -->
                </span>
            </span>
             <el-dropdown-menu slot="dropdown">
                <ul class="userM">
                    <li class="user_msg"><span>姓名：</span><span>Dao</span></li>
                    <li class="user_msg"><span>电话：</span><span>180-1122-3311</span></li>
                    <li class="user_msg"><span>地址：</span><span>西大门</span></li>
                </ul>
            <el-dropdown-item><el-button @click="loginOut" type="text">退出</el-button></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="menu"  :isShrink="isShrink" :style="{width:isShrink? '0' : '180px',padding:isShrink?'0':'10px 10px 10px 15px'}">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        :router="true"
        text-color="#A2A9B2"
        active-text-color="#FFFFFF"
      >
        <div v-for="(item, index) in routerData" :key="index">

          <div v-if="item.children">
            <template v-if="item.leaf">
              <el-menu-item :index="item.children[0].path">
                 <div class="routerItem">
                    <img :src="item.icon" class="RouterSvgStyle" />
                              {{item.children[0].name}}123
                  </div>
                </el-menu-item>
            </template>
           
            <el-submenu v-else :index="!item.slepath?item.path:item.slepath">
                <template slot="title">
                  <div class="routerItem">
                   <img :src="item.icon" class="RouterSvgStyle" />
                          <!-- <i :class="item.children[0].icon"></i> -->
                          {{item.name}}
                  </div>
                </template>
              <template v-for="child in item.children">
                  <el-menu-item  v-show="!child.hide" :key="child.path" :index="child.path">
                  {{child.name}}
                  </el-menu-item>
              </template>
            </el-submenu>
          </div>
        </div>
      </el-menu>
    </div>

    <!-- 内容start -->

    <div class="content">
        <router-view :key="$route.path"/>
    </div>

    <!-- 内容end -->
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      routerData: JSON.parse(localStorage.getItem("defaultrouteList")),
      proName: "AI Home",
      userInfo: {
        name: "用户名",
      },
      tooltip: '收起',
      toggleIcon: 'el-icon-s-fold',
      activeIndex: "1",
      activeIndex2: "1",
      defaultActive: this.$route.path,
      key: 0,
      showAsideBar:true,
      isShrink:false,
    };
  },
  created() {
    console.log(JSON.parse(localStorage.getItem('defaultrouteList')))
    // console.log(this.$router.options.routes, "ab");
    // console.log(this.$route.path, "222");
    // console.log(this.routerData,'routerData')
  },
  mounted(){
    this.selectRouteFun();
  },
  methods: {
    //退出
    loginOut() {
      // console.log('推出')
    },
    //导航跳转
    selectRouteFun() {
      this.$router.options.routes.forEach((el) => {
        if (el.children) {
          el.children.forEach((item) => {
            if (item.path == this.$route.path) {
              return this.defaultActive = el.path;
            }
          });
          // console.log(el.children,'children')
        }
      });
    },
    //折叠 & 收起
    toggle(){
      // this.showAsideBar = !this.showAsideBar;
            if (!this.isShrink) {
                $('.menu').animate({
                    width: '100px'
                }, 500);
            } else {
                $('.menu').animate({
                    width: '180px'
                }, 500);
            }
            this.isShrink = !this.isShrink;
    }
  },
};
</script>
<style lang="scss" scoped>
.index_body {
  min-width: 1280px;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .header {
    line-height: 60px;
    height: 60px;
    background: rgb(19, 30, 48);
    position: absolute;
    top: 0;
    left: 180px;
    right: 0;
  }
  .header {
    .dept {
      color: #fff;
      float: left;
      margin-left:30px;
      .depttitle{
        margin-left:40px;
      }
    }
    .msg {
      float: right;
      margin-right: 20px;
      .photo {
        color: #fff;
      }
      .photo img {
        width: 28px;
        height: 28px;
        vertical-align: middle;
        margin-right: 10px;
      }
      .userM{
        padding:10px;
        >>>.user_msg{
          padding:10px;
        }
      }
    }
  }
  .menu {
    width: 180px;
    position: absolute;
    top: 0;
    bottom: 0;
    background: rgb(19, 30, 48);
    z-index: 100;
    overflow: hidden;
    overflow-y: auto;
    color: #fff;
    .el-menu {
      background: rgb(8, 15, 27);
      border:none;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
      border-left-color: rgba(74, 119, 242, 0.1);
      color: #ffffff !important;
    }
    .el-menu .el-menu-item.is-active{ background:#071324; color: #FFFFFF !important}

    .el-menu-vertical-demo {
      padding-top: 60px;
      .el-menu-item {
        line-height: 50px;
        height: 50px;
        background: rgb(19, 30, 48);
        border:none;
      }
    }
  }
  .content {
    position: absolute;
    top: 60px;
    left: 180px;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    background: #ffffff;
  }
}
</style>

 