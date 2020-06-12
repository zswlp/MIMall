<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'app',
  components: {
   
    
  },
  data(){
    return {
      res:{}
      
    }
  },
  mounted(){
    // 第一种
    // 本地加载请求静态json文件
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //      this.res=res;
    // })
    // 第二种
    // 通过easy-mock平台实现数据mock
    //   this.axios.get('/user/login').then((res)=>{
    //      this.res=res;
    // })
// 第三种
// 本地集成mockjs实现数据mock
  //  this.axios.get('/user/login').then((res)=>{
  //        this.res=res;
  //   });

    // 从上往下认证
  //  storage.setItem('a',1)
    // storage.setItem('user',{a:1})
//  storage.setItem('abc',{a:1},'user')
  }
  
}
</script>
<style>
@import './assets/scss/reset.scss'
</style>


