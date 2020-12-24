<template>
  <div class="flowedit">
     <div class="forms">
     <!-- <form-create
        v-model="$f"
        :rule="rule"
        @on-submit="onSubmit"
      ></form-create> -->
      <!-- <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator> -->

      <!-- <el-button @click="openDialog">
        表单
      </el-button>
      <el-dialog
        title="表单"
        :visible.sync="dialogVisible"
        width="1200px"
        center
        :before-close="handleClose"
        :modal-append-to-body="false"
        :close-on-click-modal="false"
      > -->
        <k-form-design  title="表单设计器" toolbarsTop @save="handleSave" :showToolbarsText="true"/>
      <!-- </el-dialog> -->
    </div>
  </div>
</template>
<script>
// import draggable from 'vuedraggable'

export default {
  data() {
    return {
      dialogVisible:false,
      $f: {},
      rule: [
        formCreate.maker
          .input("商品名称1", "goods_name1")
          .props({
            placeholder: "请输入商品名称",
          })
          .validate([
            {
              required: true,
              message: "请输入商品名称",
              trigger: "blur",
            },
          ]),
        {
          type: "input",
          title: "商品名称2",
          field: "goods_name2",
          value: "iphone 7",
          props: {
            type: "textarea",
            placeholder: "请输入商品名称",
            rows: 5,
          },
          validate: [
            {
              required: true,
              message: "请输入goods_name",
              trigger: "blur",
            },
          ],
        },
        {
          type: "InputNumber",
          title: "商品名称3",
          field: "goods_name3",
          value: "iphone 3",
          props: {
            type: "InputNumber",
            placeholder: "请输入数自",
            rows: 5,
          },
          validate: [
            {
              required: true,
              message: "goods_name3",
              trigger: "blur",
            },
          ],
        },
        {
          type:"checkbox",
          title:"标签",
          field:"label",
          value:["1","2","3"],
          options:[
              {value:"1",label:"好用",disabled:true},
              {value:"2",label:"方便",disabled:false},
              {value:"3",label:"实用",disabled:false},
              {value:"4",label:"有效",disabled:false},
          ]
        },
        {
            type:"radio",
            title:"是否包邮",
            field:"is_postage",
            value:"0",
            options:[
                {value:"0",label:"不包邮",disabled:false},
                {value:"1",label:"包邮",disabled:true},
            ],
        }
      ],

      model: {
        id: 1,
        name: 'John Doe',
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'ID (disabled text field)',
            model: 'id',
            readonly: true,
            disabled: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'Your name',
            featured: true,
            required: true
          },
          {
          type: 'input',
          inputType: 'email',
          label: 'E-mail',
          model: 'email',
          placeholder: 'User\'s e-mail address'
        },
        {
          type: 'checkbox',
          label: 'Status',
          model: 'status',
          default: true
        }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    };
  },
  methods: {
    onSubmit(formData) {
      //TODO 提交表单
    },
    openDialog(){
      this.dialogVisible = true;
    },
    handleClose(){
      this.dialogVisible = false;
    },
    handleSave(){
      console.log('保存')
    }
  },
};
</script>

<style lang="scss" scoped>
.flowedit {
  .forms {
    width: 100%;
  }
}
</style>