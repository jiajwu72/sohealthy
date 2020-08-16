//import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/common/Home'
import Ynyanwo from '@/views/common/Ynyanwo'
import Yujiao from '@/views/common/Yujiao'
import Bdhongjishen from '@/views/common/Bdhongjishen'
// import ProfileOther from '@/views/common/ProfileOther'
// import ProfileUser from '@/views/common/ProfileUser'
// import Reset from '@/views/common/Reset'
// import AuthMiddleware from '@/middleware/auth'


const router= new Router({
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home,
      // meta: {
      //   // requiresAuth: true
      // }
    },
    {
      path:'/ynyanwo',
      name:'ynyanwo',
      component:Ynyanwo,
    },
    {
      path:'/yujiao',
      name:'Yujiao',
      component:Yujiao,
    },
    {
      path:'/bdhongjishen',
      name:'bdhongjishen',
      component:Bdhongjishen,
    },

  ],
  mode:'history',
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//
//     if (localStorage.getItem("jwt") == null) {
//       next({
//         path: "/match"
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
// router.beforeEach(AuthMiddleware)
export default router;
