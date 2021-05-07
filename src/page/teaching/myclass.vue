<template>
  <div class="myclass">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>我的课表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
                    <el-date-picker
                      v-model="selectDate"
                      align="right"
                      class="align-middle"
                      type="datetimerange"
                      size="small"
                      style="width: 310px"
                      :picker-options="pickerOptions"
                      start-placeholder="开始时间"
                      end-placeholder="结束时间"
                      @change="handleDateChange"
                    >
                    </el-date-picker>

        <div class="index_pageHeader">
            <el-row :gutter="20">
                <el-col :span="16"><div class="grid-content bg-purple">123</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">454gfdhghghg</div></el-col>
            </el-row>
        </div>
        <div class="index_main">
            <div class="box_p">
                <p class="animation_p">
                    段落的文
                </p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectDate:[],
       pickerOptions: {
              disabledDate(time) {
                // 因为time的时间是 00：00：00 所以加上一天的时间
                const s = 60 * 60 * 24 * 1000 - 1
                return time.getTime() + s < Date.now();
              }
            },
    }
  },
  methods:{
    handleDateChange(val) {

    }
  }

}
</script>

<style lang="scss" scoped>
.myclass{
    .index_pageHeader{
        height:96px;
        .grid-content{
            height:96px;
            border:1px solid #ddd;
            padding: 10px 0;
            background-color: #f9fafc;
        }
    }
    .index_main{
        height:196px;
        .box_p{
            // background: rgb(206, 29, 29);
            .animation_p{
                width:180px;
                height:180px;
                animation: test 3s ease 1s infinite normal none;
            }
        }
        @keyframes test{
            0%{background-color: lightblue;}
            30%{background-color: lightgreen;}
            60%{background-color: lightgray;}
            100%{background-color:lightcoral;}
        }
    }
}

</style>
