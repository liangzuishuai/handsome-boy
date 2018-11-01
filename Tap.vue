<template>
	<div class="footer">
	  <router-link to="/home">
	  	<i class="iconfont icon-meiriyicai"> </i>
	    <span>首页</span>
	  </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao"> </i>
         <span>列表</span>
      </router-link>
      <router-link to="/car">
      	<i class="iconfont icon-icon"> </i>
      	<span>购物车</span>
      </router-link>
      <router-link to="/add">
      	<i class="iconfont icon-add"> </i>
        <span>添加</span>
      </router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="" scoped>
.footer{
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 60px;
   display:flex;
   background-color: #f3f3f3;
   border-top: 1px solid #e8e8e8;
 }
   a{
    flex:1;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}
i{
  font-size: 26px;
}
 a.router-link-active{
    color:red;
  }
</style>