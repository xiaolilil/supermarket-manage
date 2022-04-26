import router from "@/router"
import store from '@/store'


router.beforeEach((to,from,next) => {
    next()
    if(store.state.user.userInfo.roles === 'client'){
      store.dispatch('permission/GET_MENU','test').then(() => {
        const all_router = store.state.permission.all_router
        router.options.routes = all_router.routes
        const async_router = store.state.permission.async_router
        
        async_router.forEach(i => {
          router.addRoute('Home', i)
        // 动态路由更新完成后执行
        next({...to, replace: true})
      })
      console.log(router)
    })
  }
})