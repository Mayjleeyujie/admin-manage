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
    name:'首页管理',
    leaf: false,  
    children: [
      {
        path: '/',
        redirect: '/admin/dashed',
        name: '首页',
        component: 'admin/dashed',
        slepath:'/dashed',
      },
      {
        path: '/user',
        slepath:'/user',
        name: '表单',
        component: 'admin/user'
      },
      {
        path: '/flowedit',
        name: '表单管理器',
        component: 'admin/flowedit'
      },
      {
        path: '/tables',
        name: 'table',
        component: 'admin/tables'
      },
    ]
  },
  {
    path:'/teaching',
    name:'教学管理',
    component: "home",
    leaf:false,
    children:[
      {
        path:'/classtable',
        name:'课题列表',
        component:'teaching/classtable'
      },
      {
        path:'/classtableDetail',
        name:'课表详情',
        component:'teaching/classtableDetail',
        hide:true,
      },
      {
        path:'/myclass',
        name:'我的课表',
        component:'teaching/myclass'
      },
      {
        path:'/releasetest',
        name:'发布试卷',
        component:'teaching/releasetest'
      },
      {
        path:'/homework',
        name:'作业列表',
        component:'teaching/homework'
      },
      {
        path:'/addhomework',
        name:'布置作业',
        component:'teaching/addhomework',
        hide:true,
      },
      {
        path:'/teachsignin',
        name:'授课签到',
        component:'teaching/teachsignin'
      },
      {
        path:'/facultyadmin',
        name:'教职工管理',
        component:'teaching/facultyadmin'
      },
    ]
  },
 

  {
    path:'/process',
    name:'流程设计器',
    component: "home",
    leaf:false,
    children:[
      {
        path:'/processlist',
        name:'流程列表',
        component:'process/processlist'
      }
    ],
  }
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
