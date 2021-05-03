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
            minWidth: 0.00,
            scale: 1.00,
            scaleMobile: 1.00
        }
      }
    },
    mounted() {
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
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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
