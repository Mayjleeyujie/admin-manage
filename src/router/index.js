import Vue from 'vue'
import Home from '@/components/Home'

import Router from 'vue-router'

//// 解决路由访问重复时报错问题：
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export const defaultRouter = [
  {
    path: '/Index',
    component: Home,
    hidden: true,
    redirect: '/Index', // 重定向
    children: [
      {
        path: '/Index',
        name: '首页',
        component: () => import('@/page/admin/index.vue'),
      },
      {
        path: '/notice',
        name: '公告',
        component: () => import('@/page/notice/notice.vue'),
      },
    ]
  },
]

localStorage.setItem('gaRouterList',JSON.stringify(defaultRouter)) //菜单


// export function reouteMenuFun(){
//   let routerList=[];
//   defaultRouter.forEach(el=>{
//     let obj = {
//       path:el.path,
//       component:Home,
//       name:el.name,
//       meta:el.meta,
//       children:[]
//     }
//     el.children.forEach(item=>{
//       obj.children.push({
//          path:item.path,
//          name:item.name,
//          hide:item.hide,//二级隐藏或显示
//          slepath:item.slepath,//act
//          meta:item.meta,
//          component:() => import(`@/page/${item.component}.vue`)
//       })
//    })
//    routerList.push(obj)
//    return routerList

//   })

// }

export default new Router({
  routes:defaultRouter
})
