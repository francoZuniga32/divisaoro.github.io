<template>
  <div id="app"> 
    <div class="header align-middle">
      <router-link to="/"><h1 class="text-center text-white">DiVisa Oro | Store</h1></router-link>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";

export default{ 
  components:{ 
    Footer
  },
  metaInfo: {
      title: 'DiVisa Oro Store',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
}
</script>
