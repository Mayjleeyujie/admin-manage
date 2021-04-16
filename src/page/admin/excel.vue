<template>
  <div class="excel">
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
        <el-table-column align="center" label="班级" prop="deptName" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" label="请假事由" prop="applyReason" :show-overflow-tooltip='true'></el-table-column>
        <el-table-column align="center" label="申请时间" prop="createTime"></el-table-column>
        <el-table-column align="center" label="操作" prop="desc">
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="goDetail(scope.row.applyCode)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pageContainer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
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
  data(){
    return{
      seeDetaildialogVisible:false,
      deleteDialogVisible:false,
      deleteForm:{},//删除的信息
      pageIndex:1,
      pageSize:10,
      total:0,
      detailForm:{}, //详情的数据 
      tableData:[
        {
          deptName:'一班',
          applyReason:'啥事由',
          createTime:'2020-10-29 10:20',
          applyCode:1,
        },
        {
          deptName:'一班',
          applyReason:'干啥啥不行吃饭第一名啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
          createTime:'2020-10-29 10:20',
          applyCode:2,
        },
         {
          deptName:'一班',
          applyReason:'申请事由',
          createTime:'2020-10-29 10:20',
          applyCode:2,
        },
         {
          deptName:'一班',
          applyReason:'申请事由',
          createTime:'2020-10-29 10:20',
          applyCode:2,
        }
      ],//表格数据
      
    }
  },
  created(){
    // this.tableInit();
  },
  methods:{
    //初始化列表
    tableInit(){
      let params={
        pageIndex:this.pageIndex,
        pageSize:this.pageSize,
        status:2
      }
      selectStayAccreditList(params).then(res=>{
        // this.tableData=res.list
        this.total=res.total
      })
    },

    handleSizeChange(size){
      this.pageSize=size
      // this.tableInit();
    },
    handleCurrentChange(index){
      this.pageIndex=index
      // this.tableInit();
    },
    goDetail(){
      console.log(12313)
    }
  }
}
</script>

<style lang="scss" scoped>
.excel{
  .tableStyle{
    .tableTitleContainer{
      .aspan{
        font-size:16px;
        font-weight: 700;
      }
    }
  }
  .pageContainer {
  text-align: right;
  padding: 10px 20px 20px;
  }
}
</style>