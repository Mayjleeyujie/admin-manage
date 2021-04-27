<template>
  <div class="createManage">
    <container>
      <!-- <WangeEditor></WangeEditor> -->
      <div class="tableStyle">
        <div class="tableTitleContainer">
          <span>表单列表</span>
          <span class="operation">
            <el-button size="mini" type="primary" @click="exportExcel()"
              >导出</el-button
            >
          </span>
        </div>
        <div class="copy-form">
          <p>请将1个复制</p>
          <el-checkbox
            v-model="ruleForm.paused"
            true-label="true"
            false-label="false"
            >粘贴后暂停新的广告系列</el-checkbox
          >
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item>
              <div class="text-left" slot="label">广告组:</div>
              <el-radio-group v-model="ruleForm.isUseSite">
                <el-radio :label="true">使用中</el-radio>
                <el-radio :label="false">未使用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="网址:" prop="webs">
              <el-input
                v-model.trim="ruleForm.webs"
                size="small"
                class="content-input"
                :maxlength="100"
                style="width: 240px"
              ></el-input>
            </el-form-item>
            <el-form-item label="标题:" prop="customName">
              <el-input
                v-model.trim="ruleForm.customName"
                size="small"
                class="content-input"
                :maxlength="100"
                style="width: 240px"
              ></el-input>
            </el-form-item>
            <el-form-item label="内容:" prop="content">
              <el-input
                v-model.trim="ruleForm.content"
                size="small"
                class="content-input"
                :maxlength="100"
                style="width: 240px"
              ></el-input>
            </el-form-item>
            <el-form-item label="列表项:">
              <el-select v-model="ruleForm.keyWord" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <div class="btn-submit">
              <el-button size="small" type="primary" plain @click="reset">
                重置
              </el-button>
              <el-button size="small" type="primary" plain @click="submitForm">
                添加
              </el-button>
            </div>
          </el-form>
        </div>
        <el-divider></el-divider>
        <el-table :data="tableData">
          <el-table-column align="center" label="状态" prop="status">
            <template slot-scope="{ row }">
              <el-switch
                :value="row.status"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="setStatus(row)"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column align="center" label="发布状态" prop="type">
            <template slot-scope="{ row }">
              <el-tag
                size="small"
                :type="row.type ? 'success' : 'info'"
                effect="dark"
              >
                {{ row.type ? row.type : "未发" }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="名称"
            prop="name"
          ></el-table-column>
        </el-table>
      </div>
    </container>
  </div>
</template>
<script>
export default {
  data() {
    const customNameValidator = (rule, value, callback) => {
      let regName = /[!~@^*(){}|“<>?,;‘=`￥……（）：《》？、。.，；’【】、=&#]+/g;
      if (!value) {
        return callback(new Error("请输入标题"));
      } else if (regName.test(value)) {
        callback(new Error("请输入正确的标题"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        webs: "",
        isUseSite: true,
        paused: "",
        customName: "",
        content: "",
        keyWord: "",
      },
      tableData: [
        {
          status: true,
          type: "已发",
          name: "asd",
          googleId: 12850292587,
        },
        {
          status: false,
          name: "srere",
          googleId: 12850292587,
        },
        {
          status: true,
          name: "asd",
          googleId: 12850292587,
        },
        {
          status: false,
          type: "已发",
          name: "srere",
          googleId: 12850292587,
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
      ],
      rules: {
        webs: [
          {
            required: true,
            message: "请输入...",
            trigger: "blur",
          },
        ],
        customName: [
          {
            required: true,
            message: "请输入...",
            trigger: "blur",
          },
          { validator: customNameValidator, trigger: "blur" },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    setStatus(item) {
      // let type = item.status === 'enabled' ? 'paused' : 'enabled'
      // let status = !item.status
      // this.$set(this.tableDate, 'status', status)
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset() {
      this.ruleForm = {
        webs: "",
        isUseSite: true,
        paused: "",
        customName: "",
        content: "",
        keyWord: "",
      }
    }
  },
};
</script>

<style>
.btn-submit{
 
}
</style>
