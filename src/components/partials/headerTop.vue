<script>
export default {
  name:'headerTop',

}
</script>

<template>
  <div id="header-top" class="flex_between">

    <div class="left ">
      <a href="#">download app</a>
      <a href="#">Advertise whit us</a>
    </div>

    <div class="right ">
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i> </a>
      <a href="#"><i class="fa-brands fa-twitter"></i>   </a>
      <a href="#"><i class="fa-brands fa-youtube"></i>   </a>
    </div>

  </div> 
</template>


<style lang="scss" scoped>

#header-top{
  width: 100%;
  height: 30px;
  font-size: 0.6rem;

  a{
    margin: 0 5px;
  }
}

</style>