<template>
  <div class="a">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>我的课表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <div class="index_pageHeader">
            <el-row :gutter="20">
                <el-col :span="16"><div class="grid-content bg-purple">123</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">454gfdhghghg</div></el-col>
            </el-row>
        </div>
        <div class="index_main">
            <div class="content">
                
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.index_pageHeader{
    height:96px;
    .grid-content{
        height:96px;
        border:1px solid #ddd;
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .row-bg {
        
    }
}

</style>