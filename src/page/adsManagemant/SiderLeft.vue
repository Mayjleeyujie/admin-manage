<template>
  <div class="item-list">
    <div class="item item-title" :class="{'active-on': currentStep === 1,'finish': currentStep > 1}"><div class="step"></div>投放前准备</div>
    <div class="item" :class="{'active-on': currentStep === 2,'finish': currentStep > 2}"><div class="step"></div>广告创建</div>
    <div class="item" :class="{'active-on': currentStep === 3,'finish': currentStep > 3}"><div class="step"></div>选择产品</div>
    <div class="item" :class="{'active-on': currentStep === 4,'finish': currentStep > 4}"><div class="step"></div>目标市场</div>
  </div>
</template>

<script>
  export default{
    name:'SiderLeft',
    props: {
      currentStep: {
        type: Number,
        default: 1
      }
    },
    data(){
      return {}
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .item-list{
    padding:17px 10px 10px 10px;
  }
  .item{
    display: flex;
    padding: 0 10px;
    height:61px;
    line-height: 1;
    color: #72767C;
    box-sizing: border-box;
  }
  .step{
    display:flex;
    flex-direction: column;
    margin:0 10px;
    flex-shrink: 0;
    width:13px;
    height:100%;
    &::before{
      content: '';
      display:block;
      margin-left:2px;
      width:9px;
      height: 9px;
      border-radius: 9px;
      border:1px solid #d9d9d9;;
    }
  }
  .item:not(:last-child) .step::after{
    content: '';
    display:block;
    margin-left: 6px;
    width: 1px;
    flex-grow: 1;
    background-color: #d9d9d9;;
  }
  // .item.finish {
  //   color: #72767C;
  // }
  .item.finish {
    color: #252627;
  }
  .item.finish .step::before{
    background-color: #A8A9AB;
  }

  .item.active-on{
    color:#1783b8;
  }
  .item.active-on .step::before{
    border-color: #252627;
  }
  .item.item-title .step::before{
    margin: 0;
    width:13px;
    height: 13px;
    border-radius: 13px;
  }

</style>
