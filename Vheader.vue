<template>
	<div class="header">
        <slot></slot>
        <div class="ione">
          <i @click="goHistory" class="iconfont icon-fanhui" v-if="back"></i>
        </div> 
  </div>
</template>

<script>
export default {
   props:{
   	 back:{
   	 	type:Boolean,
   	 	default:false
      }
   },
   data () {
    return {

    }
  },
  methods:{
  	goHistory(){
  		this.$router.go(-1)
  	}
  }
}
</script>

<style lang="css" scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .header{
    width: 400px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }
  .ione{
    position: relative;
    top:0px;
    left: 0px;
    width: 20px;
    height: 20px;
  }
</style>