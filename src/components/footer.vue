<script>
import FooterTop from './partials/footerTop.vue'
export default {
  name:'Footer',
  components:{
    FooterTop,
  }
}
</script>

<template>
  <footer>
    <div class="my_container">

      <FooterTop class="top"></FooterTop>    
    </div>

    <div class="bottom flex_center bg_light">
      <p>copyright 2012, Lorem ipsum dolor sit amet.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer{
  font-family: 'Nunito';
  width: 100%;
  height: 238px;

  .top{
    width: 100%;
    height: 100%;
  }

  .bottom{
    width: 100%;
    height: 40px;
    font-size: 0.65rem;
  }
}

</style>