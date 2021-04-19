<template>
  <div class="homework">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>作业列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="fastBtnContainer">
            <el-button size="mini" @click="changeStatus(0)">未批改(<span class="red">1</span>）</el-button>
            <el-button size="mini" @click="changeStatus(1)">已批改(<span class="red">1</span>）</el-button>
            <el-button size="mini" @click="changeStatus(2)">全部作业(<span class="red">2</span>）</el-button>
            <el-button size="mini" type="primary" style="float: right;" @click="releaseHomework">布置作业</el-button>
        </div>
        <div class="tableStyle">
             <div class="tableTitleContainer">
                <span>作业</span>
                <span class="operation">
                    <el-button size="mini" type="primary" @click="exportExcel()">导出</el-button>
                </span>
            </div>
         <el-table :data="TableData" style="width: 100%" class="elTable" v-loading="loading">
            <el-table-column align="center" label="序号" type="index" width="50"></el-table-column>
            <el-table-column align="center" label="姓名" prop="name"></el-table-column>
            <el-table-column align="center" label="班级" prop="class"></el-table-column>
            <el-table-column align="center" label="家长电话" prop="phone"></el-table-column>
            <el-table-column align="center" label="作业情况">
            <template slot-scope="scope">
                <el-tag
                :type="scope.row.homestatus | formatStatusType"
                class="width60"
                effect="dark"
                size="small"
                >{{ scope.row.homestatus | formatstatusTetx}}</el-tag>
          </template>
        </el-table-column>
            <el-table-column align="center" label="操作">
                <!-- <template slot-scope="scope">
                    <el-button size="small" type="text" @click="editHomework(scope.row)">编辑</el-button>
                    <el-button size="small" type="text" @click="removeIndex(scope.row)">删除</el-button>
                </template> -->
                 <template slot-scope="scope">
                    <el-dropdown @command="handleCommand($event,scope.row)">
                        <span class="el-dropdown-link">
                        更多<i aria-hidden="true" class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="0" >编辑</el-dropdown-item>
                            <el-dropdown-item command="1" >删除</el-dropdown-item> 
                        </el-dropdown-menu>
                    </el-dropdown>
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
            loading:false,
            TableData:[
                {
                    name:'张三',
                    class:'12班',
                    phone:'13912311441',
                    homestatus:1,
                    code:1,
                },
                 {
                    name:'mayj JPN',
                    class:'13班',
                    phone:'15069781425',
                    homestatus:0,
                    code:2,
                },
                {
                    name:'欧阳',
                    class:'16班',
                    phone:'18210212525',
                    homestatus:1,
                    code:1,
                },
                 {
                    name:'皮特',
                    class:'18班',
                    phone:'19013241589',
                    homestatus:0,
                    code:2,
                },
                {
                    name:'zhuli',
                    class:'15班',
                    phone:'16212412575',
                    homestatus:1,
                    code:2,
                },
                 {
                    name:'Jack',
                    class:'12班',
                    phone:'16712451475',
                    homestatus:1,
                    code:2,
                },{
                    name:'Rose',
                    class:'13班',
                    phone:'14012561125',
                    homestatus:0,
                    code:1
                }
            ]
        }
    },
    filters:{
         //状态颜色
        formatStatusType(homestatus){
            let result = "";
            switch (homestatus) {
                case 0:
                result = "success";
                break;
                case 1:
                result = "danger";
                break;
            }
             return result;
        },
        //状态
        formatstatusTetx(homestatus){
            let result = "";
            switch (homestatus) {
                case 0:
                result = "已交";
                break;
                case 1:
                result = "未交";
                break;
            }
            return result;
        },
    },
    created(){

    },
    methods:{
        //快速查看的按钮
        changeStatus(status){
        // this.resetForm();
        // if(status == 0){
        //     this.form.completed = 0;
        // }else if(status == 1){
        //     this.form.completed = 1;
        // }else if(status == 2){
        //     this.form.completed = '';
        // }
        // this.getListInit();
        },
        //布置作业
        releaseHomework(){
            this.$router.push({
                path:"/addhomework",
            });
        },
        //导出
        exportExcel(){},
        //编辑
        editHomework(){
            this.$router.push({
                path:"/addhomework",
            });
        },
        //删除
        removeIndex(){
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // getDeletelist({evaluationCode:item.evaluationCode}).then(res=>{
                //     this.$message.success('操作成功')
                //     this.listInit();
                // })
            }).catch(() => {
             });
        },
         handleCommand(index,item){
            switch (index){
                case '0' :
                this.$router.push({
                    path:"/addhomework",
                });
                break;
                case '1':
                this.removeIndex()
                break;
            }
            
        },
    }

}
</script>

<style lang="scss" scoped>
.fastBtnContainer{
    padding:10px 20px;
    border-bottom: 10px solid #f4f4f4;
    .el-button--primary{
        color: #1989FA;
        font-weight:400;
        background: #E6F1FC;
        border:1px solid #A3D0FD;
    }
    .red{
        color:rgb(208, 21, 12);
    }
}
</style>