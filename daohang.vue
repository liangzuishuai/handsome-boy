<template>
  <div class="daohang">
      <li>
          <router-link to= "/home"><span class="span">首页</span><i class="iconfont icon-ai-home"></i></router-link>
      </li>
      <li>
          <router-link to= "/list"><span class="span">列表</span><i class="iconfont icon-liebiao"></i></router-link>
      </li>
      <li>
          <router-link to= "/car"><span class="span">购物</span><i class="iconfont icon-buy-car"></i></router-link>
      </li>
      <li>
          <router-link to= "/add"><span class="span">添加</span><i class="iconfont icon-icon02"></i></router-link>
      </li>
  </div>
</template>

<script>
export default {
  name: 'daohang',
  data () {
    return {
      msg: 'Welcome to Your WangZhe RongYao'
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-left: 36px;
  float: left;
}
a.router-link-active{
  color:#666;
}
a{
  text-align: center;
  color:#9b8e8e;
}
.daohang{
  width: 390px;
  height: 40px;
  bottom: 40px;
  margin: 0 auto;

  position: relative;
  font-size: 20px;
}
i{
  position:relative;
  top: -30px;
  left:-30px;
  width: 20px;
  height: 20px;
}
</style>
