<template>
  <i :class="techIcon" 
    v-on:mouseover="$event.target.classList.toggle('colored')"      
    v-on:mouseleave="$event.target.classList.toggle('colored')">
    <md-tooltip md-direction="bottom">{{tech}}</md-tooltip>
  </i>
</template>

<script lang="ts">
export default {
  props: {
    techIcon: String,
    tech: String
  }
}
</script>

<style lang="scss" scoped>
  i {
    font-size: 3.5rem;
    width: min-content;
    margin: .9rem .5rem;

    @media screen and (max-width: 766.98px) {
      font-size: 2.5rem;
    }
  }
</style>