<template>
  <div style="background:#f0f2f5;height:100%;">
    <div class="error-404-box">
      <div class="pic-404">
        <!-- <img class="pic-404__parent" :src="img_404" alt="404"> -->
      </div>
      <div class="message-404">
        <div class="msg-title">{{ message }}</div>
        <div class="msg-detail">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <!-- <div @click="()=>{$router.push('/reportMangeDaily')}" class="goto-home">返回首页</div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import img_404 from '@/assets/404.png'
// import img_404_cloud from '@/assets/404_cloud.png'

export default {
  name: 'page404',
  data() {
    return {
      img_404,
      img_404_cloud
    }
  },
  computed: {
    message() {
      return '您访问的页面不存在！'
    }
  }
}
</script>


