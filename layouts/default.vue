<template>
  <div id="app">
    <v-vanta effect="waves" :options=options></v-vanta>
    <Header/>
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue';
import VVanta from 'vue-vanta';

export default Vue.extend({
  components: { VVanta },
    data () {
      return {
        options: {
          mouseControls: true,
          touchControls: true,
          minHeight: 450.00,
          minWidth: 450.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x361d5f,
          shininess: 0.00,
          waveHeight: 28.50,
          zoom: 0.85
        }
      }
    },
    mounted() {
      this.$store.dispatch('fetchLinkGithubProfilePicture');
    }
  })
</script>

<style>
html {
  color: white;
  font-family:
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  width: 100%;
  height: 100vh;
} 

canvas{
  position:absolute;
  left:0;
  top:0;
  z-index:-1 !important;
  height: 100vh !important;
} 

@media only screen and (max-width: 991.98px) {
  html {
    font-size: 14px;
  }
}
</style>
