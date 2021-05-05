<template>
  <div class="md-toolbar-row">
    <md-tabs class="md-primary">
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-pages" md-label="Work" to="/work"></md-tab>
      <!-- <md-tab id="tab-posts" md-label="Blog" to="/blog"></md-tab> -->
      <!-- <md-tab id="tab-favorites" md-label="About" to="/about"></md-tab> -->
    </md-tabs>
  </div>
</template>

<script lang="ts">
export default ({

})
</script>

<style lang="scss" scoped>
  .md-tabs-navigation, .md-elevation-0 {
    width: 100% !important;
    display: flex;
    justify-content: space-around !important;
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .md-tabs.md-alignment-left .md-tabs-navigation {
    justify-content: space-around !important;
  }

  .md-toolbar-row {
    justify-content: center;
    .md-primary {
      justify-content: center !important;
    }
  }

</style>