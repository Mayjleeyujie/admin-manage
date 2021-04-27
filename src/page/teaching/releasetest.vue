<template>
  <div class="container">
      <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>发布试卷</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>

        </div>
  </div>
</template>

<script>
export default {
    name:'releasetest',
    data(){
      return{
          form: {
                  name: '',
                  region: '',
                }
      }
    },
     methods: {
          onSubmit() {
            console.log(this.form.name.split(/!|！/),'1');
            console.log(typeof(this.form.name),'123');
            if(this.form.name.split(/!|！/)){
              return this.$message.info('你输入的信息有错')
            }
          }
        }
}
</script>

<style>

</style>
