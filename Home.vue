<template>
  <div class="home">
      <Vheader :black="true">
        <div class="hh5">首页</div>
      </Vheader>
      <Supper :swiperSlides ="sliders" class="liang-aaa"></Supper>
      <div class="li-b">
        <ul class="li-c">
          <li class="li-e" v-for="item in hotList">
            <img class="img" :src="item.goodimg" alt="item.info" />
            <span class="span1">{{item.goodname}}</span>
            <span class="span2">{{item.price}}</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import Vheader from '../base/Vheader.vue'
import Supper from '../base/supper.vue'
import {getSlider,getHot} from '../api'
export default {
  created(){
    // console.log(getSlider())
    // let sliders = await getSlider();
    // this.sliders = sliders;
    this.getBanner()
    this.getHot()
  },
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your WangZhe RongYao',
      name:'啦啦啦啦啦啦',
      sliders:[],
      hotList:[]
    }
  },
   components:{
      Vheader,Supper
    },
    methods:{
     async getBanner(){
      let sliders = await getSlider()
      this.sliders = sliders;
     },
     async getHot (){
       let hotList = await getHot()
       this.hotList = hotList;
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
li {
 /* display: inline-block;*/
  float: left;
}
a {
  color: #42b983;
}
.home{
  width: 30%;
  height: 600px;
  margin: 0 auto;
  background:rgba(220,210,38);
}
.hh5{
  width: 400px;
  height: 40px;
  font-size: 25px;
  margin: 0 auto;
  line-height: 55px;
}
.li-b{
  width: 404px;
  height: 400px;
}
.li-c{
   width: 404px;
  height: 315px;
}
.li-e{
  width: 134px;
  height: 145px;
}
.img{
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
.span2{
  width: 135px;
  height: 15px;
  display: block;
  font-size: 12px;
}
</style>
