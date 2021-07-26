import Vue from 'vue'
import VueRouter from "vue-router";

import main_page from "@/components/main_window/main_window";
import view from "@/components/main_window/view";
import record from "@/components/main_window/invade_record";
import modify_info from "@/components/main_window/user_info";
import modify_password from "@/components/main_window/modify_password";
import admin_permissions from "@/components/main_window/admin_permissions";
import test_video from "@/components/main_window/test_video";
import header_footer from "@/components/home_page/header_footer";

import about_us from "@/components/home_page/about_us";
import advantage from "@/components/home_page/advantage";
import home_page from "@/components/home_page/home_page";

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

//1. 注入插件
Vue.use(VueRouter)

//2.定义路由
const routes = [
  {
    path: '/',
    redirect: '/home_page',
    components: {
      login:header_footer
    },
    children:[
      {path: '/home_page', components: {home_page_body: home_page}},
      {path: '/advantage', components:{home_page_body: advantage}},
      {path: '/about_us', components: {home_page_body: about_us}},
    ]
  },

  {
    path: '/main_window',
    name: 'main_window',
    components: {
      login:main_page,
    },
    children:[
      {path: '/info_modify', components: {menu_content:modify_info}},
      {path: '/password_modify', components: {menu_content:modify_password}},
      {path: '/invade_recode',  components: {menu_content: record}},
      {path: '/view', components: {menu_content: view}},
      {path: '/admin_permissions', components: {menu_content: admin_permissions}},
      {path: '/test_video_page', components: {menu_content: test_video}}
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