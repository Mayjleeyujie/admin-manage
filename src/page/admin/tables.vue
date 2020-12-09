<template>
      <div class="contaniner">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>报表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="tableStyle">
                <div class="tableTitleContainer">
                    <span class="aspan">列表</span>
                </div>
                <el-table :data="tableData" style="width: 100%" class="elTable">
                    <el-table-column type="index" label="序号" width="50"></el-table-column>
                    <el-table-column align="center" label="标题" prop="title"></el-table-column>
                    <el-table-column align="center" label="时间" prop="time" :show-overflow-tooltip='true'></el-table-column>
                    <el-table-column align="center" label="地点" prop="site"></el-table-column>
                    <el-table-column align="center" label="操作" prop="desc">
                        <template slot-scope="scope">
                            <el-button size="small" type="text" @click="lookDetail(scope.row.applyCode)">查看</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                </div>
      </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[
                {
                    title:'关于会议的主要内容',
                    time:'2020-12-25',
                    site:"会议中心",
                    applyCode:'01'
                },
                 {
                    title:'关于变更人的内容',
                    time:'2020-12-15',
                    site:"会议中心",
                    applyCode:'02'
                },
                 {
                    title:'关于小组成员',
                    time:'2020-12-27',
                    site:"会议中心",
                    applyCode:'03'
                }
            ]
        }
    },
    methods:{
        lookDetail(){}
    }
}
</script>

<style>

</style>