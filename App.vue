<template>
  <div id="app">
   <!--  <img id="img" src="./image/45.jpg"> -->
  <!-- <h2>Hello world</h2>  -->
    <router-view/>
    <daohang/>
  </div>
</template>

<script>
import daohang from './base/daohang.vue'
export default {
  name: 'App',
   components:{
      daohang
    }
}
</script>

<style>
html{
  font-size: 30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

a.router-link-active{
  color:red;
}
</style>
