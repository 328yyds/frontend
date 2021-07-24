import Vue from 'vue'
import VueRouter from "vue-router";

import init_page from "@/components/Login/init_page";

import admin_main_page from "@/components/main_window/main_window";
import admin_view from "@/components/main_window/view";
import admin_record from "@/components/main_window/record";
import admin_modify from "@/components/main_window/modify";
import admin_modify_password from "@/components/main_window/modify_password";
import admin_permissions from "@/components/main_window/admin_permissions";

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

//1. 注入插件
Vue.use(VueRouter)

//2.定义路由
const routes = [
  {path: '/', components: {login:init_page}},
  //管理员界面路由
  {
    path: '/main_window',
    name: 'main_window',
    components: {
      login:admin_main_page,
    },
    children:[
      {path: '/info_modify', components: {menu_content:admin_modify}},
      {path: '/password_modify', components: {menu_content:admin_modify_password}},
      {path: '/invade_recode',  components: {menu_content: admin_record}},
      {path: '/view', components: {menu_content: admin_view}},
      {path: '/admin_permissions', components: {menu_content: admin_permissions}},
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