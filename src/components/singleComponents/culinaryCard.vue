<script>
export default {
  name:'CulinaryCard',
  props:{
    imgUrl: String,
    title: String,
  }
}
</script>

<template>
  <div id="card" class="card flex_center ">


    <img :src=imgUrl class="" alt="">

    <p class="">{{ title }}</p>
  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/var.scss' as * ;

.card{
  flex-direction: column;
  margin: 0px 5px 10px 5px;
  padding:  5px;
  box-shadow: 0px 0px 20px rgba(121, 121, 121, 0.253);
  transition: all 0.2s ease;

    img{
      width: 40%;
    }

    p{
      text-transform: uppercase;
      font-size: 0.65rem;
      font-weight: bold;
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      transition: all 0.2s ease;
    }

&:hover{
    box-shadow: 0px 0px 20px rgba(121, 121, 121, 0.466);
    
    p{
      background-color: $avada_orange;
      color:white;
      
    }
  }
}
</style>