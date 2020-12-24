<template>
  <div class="teaching_sign">
         <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>授课签到</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="teaching_main">
            <div class="top_main">
                <h2>
                   授课签到 
                </h2>
                <p>
                    设置教师签到规则，考核教师出勤
                </p>
            </div>
            <div class="bot_main">
                 <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="设置" name="first">设置</el-tab-pane>
                    <el-tab-pane label="统计" name="second">统计</el-tab-pane>
                </el-tabs>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            activeName:'first'
        }
    },
    created(){

    },
    methods:{
        handleClick(){},
    }

}
</script>

<style lang="scss" scoped>
.teaching_sign{
    .teaching_main{
        padding:20px;
        .top_main{
            h2{
                font-weight: bold;
            }
        }
    }
}
</style>