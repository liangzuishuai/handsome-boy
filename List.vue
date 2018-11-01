<template>
  <div class="list">
   <Vheader :back="true">
     <h6>列表</h6>
   </Vheader>
    <ul class="LIST-A">
      <router-link v-for="(good,key) in allGood" :to="{name:'Detail',params:{bookid:good.id}}" tag="li" :key="key">
        <img :src="good.goodimg" alt="" />
        <div>
          <p class="span1">{{good.goodname}}</p>
          <p class="info">{{good.info}}</p>
          <p class="info">{{good.price}}w</p>
          <span class="info2">添加</span>
          <span class="info2">删除</span>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
import Vheader from '../base/Vheader.vue'
import {getAll} from '../api'
export default {
   created(){
    this.getAllGood()
  },
  name: 'list',
  data () {
    return {
      msg: 'Welcome to Your WangZhe RongYao',
      allGood:{}
    }
  },
   components:{
      Vheader
    }
    , methods:{
     async getAllGood(){
      let allGood = await getAll()
      this.allGood = allGood;
     }
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
  width: 134px;
  height: 170px;
}
a {
  color: #42b983;
}
.list{
 width: 30%;
  height: 600px;
  margin: 0 auto;
  background:rgba(220,210,38);
}
.LIST-A{
   width: 404px;
   height: 500PX;
}
img{
  width: 130px;
  height: 100px;
}
.span1{
  width: 135px;
  height: 15px;
  font-size: 12px;
  overflow: hidden;
  display: block;
}
.info{
   width: 135px;
  height: 15px;
  font-size: 12px;
  overflow: hidden;
  display: block;
}
.info2{
   width: 60px;
  height: 15px;
  font-size: 12px;
  overflow: hidden;
  float: left;
  display: block;
}
</style>
