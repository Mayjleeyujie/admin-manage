import router from '@/router'
// import store from '@/store'
// import { getToken } from '@/js/auth'

const whiteList = [ '/', '/404' , '/401' ]   // no redirect whitelist
router.beforeEach((to, from, next) => {
  // console.log(getToken(),1,to.query.accessToken,4, to.path,333, to.name, 2222222222222)
  if ( whiteList.indexOf( to.path ) !== -1 ) {  
    next();
  } 
  else {
    if(to.query.accessToken!=''){
      // console.log('走这里')
      next();
    }else {
      // console.log('执行了')
      //清除缓存，做登出状态
        store.dispatch( 'FedLogOut' ).then(() => {
          next('/');           //跳转到登录页面 
        });
      }
    }
})

router.afterEach(() => {
})
