<script>
import Header from './components/header.vue';
import Main from './components/main.vue';
import Footer from './components/footer.vue';
import {store} from './data/store';

export default {
  name:'App',
  components:{
    Header,
    Main,
    Footer
  },

  methods:{},
  mounted(){
  }
}
</script>

<template>
  <div id="main_wrapper">

    <Header class="debug"/>
    <Main/>
    <Footer/>

  </div>
</template>


<style lang="scss" >
@import './scss/main.scss';

</style>