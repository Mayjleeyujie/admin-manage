<template>
  <div class="facultyadmin">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>教职工管理</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- <div class="selectInput">
                <el-button size="small" @click="()=>{$router.go(-1)}">返回上一级</el-button>
            </div>  -->
        </div>
        <SearchQuery>
            <div class="search">
                <el-form :inline="true" class="moreConditions">
                    <el-form-item label="学校:">
                        <el-input size="mini" clearable v-model="form.school"></el-input>
                    </el-form-item>
                    <el-form-item label="授课教师:">
                        <el-input size="mini" clearable v-model="form.teacher"></el-input>
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
                <span>教职工列表</span>
                <span class="operation">
                    <el-button size="small" type="primary" @click="exportExcel()">导出</el-button>
                    <el-button size="small" @click="toggleSelection()">取消选择</el-button>
                </span>
            </div>
            <el-table  
                ref="multipleTable"
                :data="TableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange" 
                border  
                class="elTable" 
                v-loading="loading"
                >
                <el-table-column type="selection" width="55" align="center">
                </el-table-column>
                <el-table-column align="center" label="序号" type="index" width="50"></el-table-column>
                <el-table-column align="center" label="姓名" prop="name"></el-table-column>
                <el-table-column align="center" label="角色" prop="role"></el-table-column>
                <el-table-column align="center" label="手机号码" prop="phone"></el-table-column>
                <el-table-column align="center" label="任课班级" prop="class">  </el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger">删除</el-button>
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
                school:'',
                teacher:'',
            },
            multipleSelection: [],
            loading:false,
            TableData:[
                {
                    name:'马云',
                    role:'班主任',
                    phone:'19012111614',
                    class:'13班'
                },
                {
                    name:'张飞',
                    role:'教务老师',
                    phone:'164123658978',
                    class:'14班'
                },
                {
                    name:'张墨',
                    role:'管理员',
                    phone:'11122334566',
                    class:'11班'
                },
                {
                    name:'吴彦祖',
                    role:'班主任',
                    phone:'11122334566',
                    class:'16班'
                }
            ]

        }
    },
    methods:{
        searchList(){},
        reset(){},
        exportExcel(){},
        editRow(item){

        },
        handleSelectionChange(val) {
         this.multipleSelection = val;
        },
        //取消选择
        toggleSelection(){
            this.$refs.multipleTable.clearSelection();
        },
        allexport(){}

    }
}
</script>

<style>

</style>