<template>
  <div class="add">
         <Vheader :black="true">
            <h6>添加</h6>
        </Vheader>
  </div>
</template>

<script>
import Vheader from '../base/Vheader.vue'
export default {
  name: 'add',
  data () {
    return {
      msg: 'Welcome to Your WangZhe RongYao',
      name:'啦啦啦，我是卖奇奇怪怪干脆面的怪哥哥'
    }
  },
   components:{
      Vheader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: blue;
  text-decoration: none;
}
.add{
  width: 30%;
  height: 600px;
  margin: 0 auto;
  background:rgba(220,210,38);
}
</style>
