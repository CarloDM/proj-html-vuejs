<script>
import headerTop from './partials/headerTop.vue';
import headerNav from './partials/headerNav.vue';
import Logo from './singleComponents/logo.vue';
export default {
  name:'Header',
  components:{
    headerTop,
    headerNav,
    Logo,
  }
}
</script>

<template>
  <header class="">
    <div class="my_container ">

      <headerTop />

      <div class="logo "> <Logo/> </div>

      <headerNav />

    </div>
  </header>
</template>

<style lang="scss" scoped>

header{
  font-family: 'Nunito';

  .logo{
    width: 90px;
    aspect-ratio: 1.25/1;
    margin: 0px auto 11px auto;
  }
}
</style>