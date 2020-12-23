<template>
  <div class="container">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>我的课表</el-breadcrumb-item>
        <el-breadcrumb-item>课表详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="selectInput">
        <el-button size="small" @click=" () => {$router.go(-1); }">返回上一级</el-button>
      </div>
    </div>
    <div class="daily_detail">
        <ul class="daily_info">
            <li>
                <span class="bold">课表标题：</span>
                <span>语文</span>
            </li>
            <li>
                <span  class="bold">时长：</span>
                <span>2小时</span>
            </li>
            <li>
                <span  class="bold">课表状态：</span>
                <span>已授课</span>
            </li>
            <li>
                <span  class="bold">授课人数：</span>
                <span>64</span>
            </li>
            <li>
                <span  class="bold">授课地点：</span>
                <span>  502</span>
            </li>
             <li>
                <span  class="bold">是否签到：</span>
                <span>是</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            detailData:{
                title:'',
                reportedTime:'',
                status:'',
                count:'',
            }
        }
    },
    created(){

    },
    methods:{
    },
};
</script>

<style lang="scss" scoped>
.daily_detail {
  padding: 10px 20px 60px;
}
.daily_detail > h1 {
  font-size: 22px;
  font-weight: 400;
  line-height: 22px;
}
.daily_info {
  margin: 30px;
  border:1px solid #ddd;
  border-radius: 10px;
}
.daily_info > li {
  margin-top: 10px;
  font-size: 16px;
  display:block;
  font-weight: 300;
  line-height: 40px;;
  color: #303133;
  padding-left:20px;
}
.daily_info > li:nth-of-type(even){ background:#F3F4F4;}
.daily_info > li:nth-of-type(odd){ background:#FFFFFF;}
.daily_info > li .bold{
    margin-right:20px;
}
</style>