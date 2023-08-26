<template>
  <div class="mt-4">
    <div class="background-img"></div>    
  </div>
  <HomeCarousel/>
</template>

<script>
import HomeCarousel from './HomeCarousel.vue';
export default {
  name: "HomePage",
  components:{
    HomeCarousel
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background-img{
  background-image: url(../assets/mainPageCover.jpg);
  width:100%;
  height:7cm;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h3 {
  margin: 40px 0 0;
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
