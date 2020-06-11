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
    // 本地加载请求静态json文件
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //      this.res=res;
    // })
      this.axios.get('/mock/user/login.json').then((res)=>{
         this.res=res;
    })
    // 从上往下认证
  //  storage.setItem('a',1)
    // storage.setItem('user',{a:1})
//  storage.setItem('abc',{a:1},'user')
  }
  
}
</script>



