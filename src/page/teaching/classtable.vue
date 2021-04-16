<template>
  <div class="container">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>课题列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <SearchQuery>
            <div class="search">
                <el-form :inline="true" class="moreConditions">
                <el-form-item label="选择时间:">
                    <el-select v-model="conditionTime" clearable size="mini" placeholder="请选择">
                    <el-option
                        v-for="item in timeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                    <el-button-group>
                    <el-button size="mini" @click="timeForMat(1)">昨天</el-button>
                    <el-button size="mini" @click="timeForMat(7)">最近7天</el-button>
                    <el-button size="mini" @click="timeForMat(30)">最近30天</el-button>
                    </el-button-group>
                    <el-date-picker
                    v-model="form.startTime"
                    value-format="yyyy-MM-dd"
                    @change="changeTime(1)"
                    size="mini"
                    type="date"
                    placeholder="开始日期">
                    </el-date-picker>
                    <span class="timeCenter">至</span>
                    <el-date-picker
                    v-model="form.endTime"
                    value-format="yyyy-MM-dd"
                    @change="changeTime(2)"
                    size="mini"
                    type="date"
                    placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                    <br>
                <el-form-item label="课表标题:">
                    <el-input size="mini" clearable v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="授课教师:">
                    <el-input size="mini" clearable v-model="form.deptName"></el-input>
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
            <el-table-column align="center" label="课程时间" prop="time" show-overflow-tooltip></el-table-column>
            <el-table-column align="center" label="授课教师" prop="teacher" :show-overflow-tooltip='true'></el-table-column>
            <el-table-column align="center" label="课表状态">
            <template slot-scope="scope">
                <el-tag
                :type="scope.row.status | formatStatusType"
                class="width60"
                effect="dark"
                size="small"
                >{{ scope.row.status | formatstatusTetx}}</el-tag>
          </template>
        </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="text" @click="goDeatil(scope.row)">课表详情</el-button>
                    <el-button size="small" type="text" @click="removeIndex(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        </div>

        <div class="footer_container">
            <el-pagination
                class="footer_pagination"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            ></el-pagination>
        </div>
  </div>
</template>

<script>
export default {
    name:'classtable',
    data(){
        return{
            currentPage: 1, //当前页
            total: 10, //总条数
            pageSize: 10, //页面大小
            form:{
                time:[],
                startTime:'',
                endTime:'',
                deptName:'',
                title:''
            },
            conditionTime:'',
            loading:false,
            timeOptions:[
                {value:'1',label:'截止时间'},
                {value:'2',label:'部署时间'},
                {value:'3',label:'读取时间'},
                {value:'4',label:'反馈时间'},
                {value:'5',label:'阅办时间'}
            ],
            TableData:[
                {
                    title:'语文',
                    time:'20201211',
                    teacher:'王老师',
                    status:0,
                    code:1
                },
                {
                    title:'语文',
                    time:'20201221',
                    teacher:'王老师王老师王老师王老师王老师王老师王老师王老师王老师王老师王老师王老师',
                    status:1,
                    code:2
                },
                {
                    title:'英语',
                    time:'20201103',
                    teacher:'miss LeeJONmiss LeeJONmiss LeeJONmiss LeeJONmiss LeeJONmiss LeeJONmiss LeeJONmiss LeeJONmiss LeeJONmiss LeeJONmiss LeeJON',
                    status:0,
                    code:2
                },
                {
                    title:'物流',
                    time:'20201103',
                    teacher:'薛老师',
                    status:1,
                    code:1
                },{
                    title:'英语',
                    time:'20201013',
                    teacher:'miss LeeJON',
                    status:1,
                    code:2
                },
                {
                    title:'化学',
                    time:'20201203',
                    teacher:'杨老师',
                    status:0,
                    code:1
                },{
                    title:'英语',
                    time:'20201118',
                    teacher:'miss LeeJON',
                    status:0,
                    code:2
                },{
                    title:'语文',
                    time:'20201211',
                    teacher:'王老师',
                    status:0,
                    code:1
                },
                {
                    title:'英语',
                    time:'20201118',
                    teacher:'miss LeeJON',
                    status:0,
                    code:2
                },
            ]
        }
    },
    created(){

    },
    filters:{
         //状态颜色
        formatStatusType(status){
            let result = "";
            switch (status) {
                case 0:
                result = "success";
                break;
                case 1:
                result = "info";
                break;
            }
             return result;
        },
        //状态
        formatstatusTetx(status){
            let result = "";
            switch (status) {
                case 0:
                result = "已授课";
                break;
                case 1:
                result = "未上课";
                break;
            }
            return result;
        },
    },
    methods:{

        //修改时间
        changeTime(num){
            if (this.form.startTime && this.form.endTime){
                if(this.form.startTime.split('-')>this.form.endTime.split('-')){
                if(num===1){
                    this.form.endTime=''
                }else{
                    this.form.startTime=''
                }
                }
            }
        },
        //时间格式化
        timeForMat(count){
            let time1=new Date();
            time1.setTime(time1.getTime()-(24 * 60 * 60 * 1000));
            let Y1 = time1.getFullYear();
            let M1 = time1.getMonth() + 1<10? "0" + time1.getMonth() + 1:  time1.getMonth() + 1;
            let D1 = time1.getDate()<10? "0" + time1.getDate() : time1.getDate();
            time1 = Y1+'-'+M1+'-'+D1;//当前时间

            let time2=new Date();
            time2.setTime(time2.getTime()-(24 * 60 * 60 * 1000*count));
            let Y2 = time2.getFullYear();
            let M2 = time2.getMonth() + 1<10? "0" + time2.getMonth() + 1:  time2.getMonth() + 1;
            let D2 = time2.getDate()<10? "0" + time2.getDate() : time2.getDate();
            time2 = Y2+'-'+M2+'-'+D2;//之前的7天或者30天
            this.form.endTime=time1
            this.form.startTime=time2
        },
        searchList(){},
        reset(){
            this.form.title = ''
            this.form.endTime=''
            this.form.startTime=''
            this.form.deptName = ''
            this.conditionTime=''
        },
        //导出
        exportExcel(){

        },
        //详情
        goDeatil(item){
            this.$router.push({
                path:"/classtableDetail",
                query:{
                    code:item.code,
                }
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
        handleSizeChange(item) {
            this.pageSize=item
            // this.getListInit();/
        },
        handleCurrentChange(item) {
            this.currentPage=item
            // this.getListInit();
        }
    },


}
</script>

<style>

</style>
