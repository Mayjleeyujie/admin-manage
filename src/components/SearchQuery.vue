<template>
  <div class="conditionsContainer">
    <el-collapse accordion v-model="moreStatus" @change="changeHandle">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="moreBtn">
            <span class="chooseTitle">选择查询</span>
            <span  class="seniorSearch">
                <slot name="more"></slot>
            </span>
            <span class="moreIconContainer">
              <img
                :class="moreStatus?'active iconStyle':'iconStyle'"
                src="../assets/more.png"
                alt
              />
              <span class="textStyle">{{moreText}}</span>
            </span>
          </div>
        </template>
        <div class="mainContainer">
          <slot></slot>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
// import { selectJobEvaluationDetailList } from "@/api/jobManage";
export default {
  name: "SearchQuery",
  props: {
    moreDialogVisible: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      moreStatus: "",
      moreText: "展开更多"
    };
  },
  methods: {
    //展开条件筛选
    changeHandle(val) {
      console.log(val,'val')
      this.moreStatus == 1
        ? (this.moreText = "收起筛选")
        : (this.moreText = "展开更多");
    }
  }
};
</script>

<style lang="scss" scoped>
.conditionsContainer {
  border-bottom: 10px solid #f4f4f4;
  .mainContainer{
      padding: 10px 20px 0;
  }
  .moreBtn {
    width: 100%;
    padding: 0 50px 0 20px;
    color: #151e26;
    font-size: 14px;
    font-weight: 400;
    border-bottom: 1px solid #f3f3f4;
    .chooseTitle{
      margin-right: 20px;
    }
    .seniorSearch {
      color: #2c7ae6;
    }

    .moreIconContainer {
      float: right;
      display: flex;
      align-items: center;
      color: #1989fa;
      font-size: 13px;
      img {
        width: 14px;
        margin-right: 5px;
        transition: transform 0.5s;
        transform: rotate(180deg);
      }
      .textStyle {
        transition: transform 0.3s;
      }
      .active {
        transform: rotate(0deg);
      }
    }

    .moreConditions {
      border-top: 1px solid #f4f4f4;
      padding: 10px 20px 0;
      .el-form-item {
        margin-bottom: 5px;
      }
    }
  }
  >>> .el-collapse-item__content {
    padding-bottom: 10px;
  }
  >>> .el-collapse-item__arrow {
    display: none;
  }
  >>>.el-form-item{
      margin-bottom: 5px;
  }
}
</style>