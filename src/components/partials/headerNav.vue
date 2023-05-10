<script>
export default {
  name:'headerNav',

}
</script>

<template>
  <div id="header-nav" class=" flex_center">

    <ul class="flex_between debug">
      <li>Home</li>
      <li>recipes</li>
      <li>Places</li>
      <li>Blog</li>
      <li>About</li>
      <li><i class="fa-solid fa-magnifying-glass"></i></li>
    </ul>

  </div> 
</template>


<style lang="scss" scoped>

#header-nav{
  width: 100%;
  height: 30px;

  ul{
    width: 60%;

    li{

    }
  }
}
</style>