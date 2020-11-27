import Vue from 'vue'
import home from '@/components/home'//顶部和菜单
import Router from 'vue-router'

//// 解决路由访问重复时报错问题：
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const defaultrouteList = [
  {
    path: '/',
    component: "home",
    leaf: true,  
    children: [
      {
        path: '/',
        redirect: '/admin/dashed',
        name: '首页',
        component: 'admin/dashed'
      },
      {
        path: '/excel',
        name: '报表管理',
        component: 'admin/excel'
      },
      // {
      //   path: '/user',
      //   name: '表单',
      //   component: 'admin/user'
      // },
     
    ]
  },
  ]
export function routerMenuFun(defaultrouteList){
  let routerList=[];
  // console.log(defaultrouteList,'defaultrouteList')
  defaultrouteList.forEach(el=>{
      let obj={
        path:el.path,
        component:home,
        name:el.name,
        leaf:el.leaf,
        meta:el.meta,
        children:[]
      }
      el.children.forEach(item=>{
        obj.children.push({
           path:item.path,
           name:item.name,
           hide:item.hide,//二级隐藏或显示
           meta:item.meta,
           component:() => import(`@/page/${item.component}.vue`)
        })
      })
      routerList.push(obj)
  })
  // console.log(routerList,'routerList')
  return routerList
}
localStorage.setItem('defaultrouteList',JSON.stringify(defaultrouteList));
var defaultRouter = routerMenuFun(JSON.parse(localStorage.getItem("defaultrouteList")))
// console.log(defaultRouter,'defaultRouter')

Vue.use(Router)

// router.beforeEach((to, from, next) => {
//   next()
// })

export default new Router({
  routes: defaultRouter
})
