<template>
  <div class="car">
        <Vheader :black='true'>
            <h6>购物车</h6>
        </Vheader>
  </div>
</template>

<script>
import Vheader from '../base/Vheader.vue'
export default {
  name: 'car',
  data () {
    return {
      msg: 'Welcome to Your WangZhe RongYao'
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
.car{
 width: 30%;
  height: 600px;
  margin: 0 auto;
  background:rgba(220,210,38);
}
</style>
