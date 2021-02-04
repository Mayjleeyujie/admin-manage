<template>
  <div v-if="show" class="panelWrapper">
    <div class="panelHeader">{{form.id}}</div>
    <el-form class="panelForm" :model="form" label-position="top">
      <el-tabs v-model="activeName">
        <el-tab-pane label="普通" name="general">
          <el-form-item label="Id">
            <el-input size="mini" v-model="form.id" @change="v=>updateForm('id',v)"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input size="mini" v-model="form.name" @change="v=>updateForm('name',v)"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane v-if="formType.includes(businessObject.$type)" label="表单" name="form">
          <el-form-item label="表单Id">
            <el-input size="mini" v-model="form.formKey" @change="v=>updateForm('formKey',v)"></el-input>
          </el-form-item>
          <el-form-item label="表单字段">
            <el-button :disabled="!currentRow" class="tableBtn" type="text" @click="delFP"><i class="el-icon-remove"></i></el-button>
            <el-button class="tableBtn" type="text" @click="addFP"><i class="el-icon-circle-plus"></i></el-button>
            <el-table class="fpTable" border :show-header="false" :data="formProperty" style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
              <el-table-column prop="id"></el-table-column>
            </el-table>
          </el-form-item>
          <template v-if="currentRow">
            <div class="title">字段属性</div>
            <el-form-item label="id">
              <el-input size="mini" v-model="currentRow.id" @change="v=>updateFormProperty('id',v)"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-select size="mini" style="width:100%" v-model="currentRow.type" placeholder="请选择" @change="v=>updateFormProperty('type',v)">
                <el-option v-for="item in options" :key="item"
                  :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="名称">
              <el-input size="mini" v-model="currentRow.name" @change="v=>updateFormProperty('name',v)"></el-input>
            </el-form-item>
            <el-form-item label="默认值">
              <el-input size="mini" v-model="currentRow.default" @change="v=>updateFormProperty('default',v)"></el-input>
            </el-form-item>
          </template>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>
 
<script>
export default {
  props:{
    element:{},
    businessObject:{
      default:function(){
        return {}
      },
    },
    modeling:{},
    moddle:{},
  },
  data(){
    return {
      show:false,
      activeName:'general',
      form:{},
      formProperty:[],
      currentRow :'',
      extensionElements:'',
      options:['long','string','boolean','date','enum','custom type'],
      formType:["bpmn:StartEvent","bpmn:UserTask"],
    }
  },
  methods:{
    // 初始化
    init(){
      this.show = true
      this.activeName='general'
      if(this.formType.includes(this.businessObject.$type)){
        this.extensionElements= this.businessObject.extensionElements || this.moddle.create('bpmn:ExtensionElements',{ values: [] })
        this.modeling.updateProperties(this.element, {
          extensionElements: this.extensionElements
        });
        this.formProperty = this.extensionElements.values
      }
      this.currentRow = ''
      this.form = this.$copy(this.businessObject)
      console.log('form',this.form)
      console.log('businessObject',this.businessObject)
      console.log('extensionElements',this.extensionElements)
      console.log('formProperty',this.formProperty)
    },
    //修改表单
    updateForm(type,v){
      this.modeling.updateProperties(this.element, {
        [type]: v
      });
      console.log(this.form,this.businessObject)
    },
    //修改表单字段
    updateFormProperty(type,v){
      this.modeling.updateProperties(this.element, {
        extensionElements: this.extensionElements
      });
      console.log(this.businessObject,this.extensionElements)
    },
    // 删除表单字段
    delFP(){
      let i = this.formProperty.findIndex(e=>e.id==this.currentRow.id)
      this.formProperty.splice(i,1)
      console.log(this.extensionElements)
      this.modeling.updateProperties(this.element, {
        extensionElements: this.extensionElements
      });
    },
    // 新增表单字段
    addFP(){
      //activiti:FormProperty里的FormProperty要与activiti.json保持
      let formProperty = this.moddle.create('activiti:FormProperty',{id: "FormProperty_"+this.random(100000,999999)});
      this.extensionElements.get('values').push(formProperty);
      this.modeling.updateProperties(this.element, {
        extensionElements: this.extensionElements
      });
      // this.formProperty.push({id: "FormProperty_"+this.random(100000,999999),$type: "activiti:formProperty"})
      console.log(this.formProperty,this.extensionElements)
    },
    // 获取随机数
    random(lower, upper) {
      return Math.floor(Math.random() * (upper - lower)) + lower;
    },
    // 选中表单字段行
    handleCurrentChange(row){
      this.currentRow  = row
    },
  },
}
</script>
 
<style lang="scss" scoped>
.panelWrapper{
  position: fixed;
  right:0;
  top:0;
  border-left:1px solid #ccc;
  height:100%;
  background-color: #f8f8f8;
  width:260px;
  .panelHeader{
    padding: 15px;
    padding-bottom: 5px;
    font-size: 120%;
    font-weight: bolder;
  }
  .panelForm{
    padding:15px;
  }
}
.tableBtn{
  padding:0;
  font-size: 18px;
}
.title {
  line-height: 32px;
  font-size: 16px;
}
</style>
<style lang="scss">
.panelForm{
  .el-form-item {
    margin-bottom: 10px;
  }
  .el-form-item__label{
    line-height: 20px;
    padding-bottom:0;
  }
}
.fpTable{
  height:150px;
  overflow-y:auto;
  td, th{
    padding:0;
    cursor: pointer;
  }
}
</style>