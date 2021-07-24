import Vue from 'vue'
import VueRouter from "vue-router";

import init_page from "@/components/Login/init_page";
import user_view from "@/components/main_window/user_view";
import user_modify from "@/components/main_window/user_modify";
import user_record from "@/components/main_window/user_record";
import user_modify_password from "@/components/main_window/user_modify_password";
import user_main_page from "@/components/main_window/user_main_page";

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

//1. 注入插件
Vue.use(VueRouter)

//2.定义路由
const routes = [
  {path: '/', components: {login:init_page}},
  {
    path: '/main_window',
    name: 'main_window',
    components: {
      login:user_main_page,
    },
    children:[
      {path: '/info_modify', components: {menu_content:user_modify}},
      {path: '/password_modify', components: {menu_content:user_modify_password}},
      {path: '/invade_recode',  components: {menu_content: user_record}},
      {path: '/view', components: {menu_content: user_view}},
    ]
  },
]

//3. 创建router实例
const router = new VueRouter({
  mode: 'history',
  routes: routes
})


//导出router 实例
export default router