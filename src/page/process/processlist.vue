<template>
    <div class="processlist">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>流程设计器</el-breadcrumb-item>
                <el-breadcrumb-item>流程列表</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="selectInput">
                <!-- <el-button size="small" @click="()=>{$router.go(-1)}">返回上一级</el-button> -->
            </div> 
        </div>
        <SearchQuery>
            <div class="search">
                <el-form :inline="true" class="moreConditions">
                <el-form-item label="流程名称:">
                    <el-input size="mini" clearable v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="流程key:">
                    <el-input size="mini" clearable v-model="form.mc"></el-input>
                </el-form-item>
                <el-form-item label="状态:">
                    <el-select v-model="form.status" placeholder="选择状态" clearable>
                        <el-option
                            v-for="(item, index) in statusList"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                        />
                        </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button size="mini" @click="searchList()">搜索</el-button>
                    <el-button size="mini" @click="reset()">重置</el-button>
                </el-form-item>
                </el-form>
            </div>
        </SearchQuery>

        <div class="tableStyle">
             <div class="tableTitleContainer">
                <span>表单列表</span>
                <span class="operation">
                    <el-button size="mini" type="primary" @click="exportExcel()">导出</el-button>
                </span>
            </div>
         <el-table :data="TableData" style="width: 100%" class="elTable" v-loading="loading">
            <el-table-column align="center" label="序号" type="index" width="50"></el-table-column>
            <el-table-column align="center" label="课表标题" prop="title"></el-table-column>
            <el-table-column align="center" label="课程时间" prop="time"></el-table-column>
            <el-table-column align="center" label="授课教师" prop="teacher"></el-table-column>
            
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="text" @click="goDeatil(scope.row)">课表详情</el-button>
                    <el-button size="small" type="text" @click="removeIndex(scope.row)">删除</el-button>
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
            form:{
                title:'',
                mc:'',
                status:'',
            },
            loading:false,
            statusList:[
                {
                    label:'已发布',
                    value:'1'
                },
                {
                    label:'未发布',
                    value:'2'
                }
            ],
            TableData:[
                {
                    code:1,

                }
            ]
        }
    },
    created(){

    },
    methods:{

    }
}
</script>

<style>

</style>