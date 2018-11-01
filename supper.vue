<template>
  <div class="swiper-one">  
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
           <img :src="slide" alt=""/>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    mounted() {
      // setInterval(() => {
      //   console.log('simulate async data')
      //   if (this.swiperSlides.length < 10) {
      //     this.swiperSlides.push(this.swiperSlides.length + 1)
      //   }
      // }, 3000)
    }
  }
</script>
<style scoped lang="css">
    *{
      padding: 0;
      margin: 0;
    }
    .swiper-one{
      margin-top: 10px;
      margin-bottom: 10px;
      overflow: auto;
      width: 100%;
      height: 170px;
      z-index: 1;
    }
    img{
      width: 100%;
      height: 170px;
    }
    /*.swiper-pagination{
      width: 100%;
      height: 210px;
    }*/
    .swiper-container{
       width: 100%;
      height: 170px;
    }
</style>