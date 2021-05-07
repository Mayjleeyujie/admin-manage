<template>
    <container>
      <div class="content">
        <div class="content-left">
          <SiderLeft :currentStep="currentStep"></SiderLeft>
        </div>
        <div class="content-right">
          <FirstUse v-if="currentStep === 1"></FirstUse>
          <SecondUse v-if="currentStep === 2"></SecondUse>
          <ThirdUse v-if="currentStep === 3"></ThirdUse>
          <FourthUse v-if="currentStep === 4"></FourthUse>
          <div class="right-footer">
            <el-button size="small" @click="currentStep-=1">上一步</el-button>
            
            <el-button type="primary" size="small" @click="currentStep+=1">下一步</el-button>
          </div>
        </div>

      </div>
    </container>
</template>

<script>
  import SiderLeft from './SiderLeft'
  import FirstUse from './FirstUse'
  import SecondUse from './SecondUse'
  import ThirdUse from './ThirdUse'
  import FourthUse from './FourthUse'

  export default {
    name:'Addmanagement',
    data(){
      return{
        currentStep: 1,
      }
    },
    components:{
      SiderLeft,
      FirstUse,
      SecondUse,
      ThirdUse,
      FourthUse
    }

  }
</script>

<style>
.content{
  display: flex;
  height: 100%;
}
.content-left{
    flex-shrink: 0;
    height:100%;
    width: 160px;
    background: #ffffff;
    box-sizing:border-box;
    border-right:1px solid #dedede;
}
.content-right{
  flex-grow: 1;
  width: 1%;
}
.right-footer{
  position: fixed;
  bottom: 40px;
  right: 40px;
}
</style>
