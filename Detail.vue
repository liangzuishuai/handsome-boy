<template>
  <div class="hello">
    {{bookid}}
  </div>
</template>

<script>
import {getOne} from '../api'
export default {
  created(){
    this.getOnebook()
  },
  computed:{
    bookid(){
        return  this.$route.params.bookid
    }
  },
  name: 'hellow',
  data () {
    return {
      msg: 'Welcome to Your WangZhe RongYao',
      good:{}
    }
  },
  methods:{
    async getOnebook(){
      let book = await getOne()
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
}
a {
  color: #42b983;
}
</style>
