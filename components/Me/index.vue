<template>
  <div class="mainWrapper">
    <img class="rounded" v-bind:src="this.$store.state.linkGithubProfilePicture" alt="Me! Drew!">
    <h1>Hi! My name is Mateus Leal, also known as Drew, I'm a JavaScript & PHP Web Developer. You can find me there:</h1>
    <div class="social">
      <a href="https://github.com/mateus228leal" target="_blank">
        <github-icon class="icon-resized" :size="1000" />
      </a>
      <a href="https://stackoverflow.com/users/15743372/user15743372" target="_blank">
        <stackoverflow-icon class="icon-resized" :size="1000"/>
      </a>
      <a href="https://twitter.com/aguycalleddrew" target="_blank">
        <twitter-icon class="icon-resized" :size="1000"/>
      </a>
      <a href="https://www.linkedin.com/in/mateus228leal/" target="_blank">
        <linkedin-icon class="icon-resized" :size="1000"/>
      </a>
      <a href="https://open.spotify.com/user/12176800164" target="_blank">
        <spotify-icon class="icon-resized" :size="1000"/>
      </a>
      <a href="https://www.instagram.com/aguycalleddrew/" target="_blank">
        <instagram-icon class="icon-resized" :size="1000"/>
      </a>
      <a href="https://www.facebook.com/mateus.leal.12177276" target="_blank">
        <facebook-icon class="icon-resized" :size="1000"/>
      </a>
    </div>
  </div>
</template>

<script>
export default ({ })
</script>


<style lang="scss" scoped>
.mainWrapper {
  @media screen and (min-width: 767px) {
    max-width: 75vw;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    align-self: center;
  }
}

h1 {
  line-height: 1;
  margin-bottom: 1rem;
}

.rounded {
  border-radius: 50%;
  max-width: 15rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 566.98px) {
    max-width: 10rem;
  }
}

.social {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 50vw;
  @media screen and (max-width: 766.98px) {
    width: 75vw;
  }

  @media screen and (max-width: 413.98px) {
    width: 90vw;
  }
}

a .material-design-icon.icon-resized {
  height: 3rem;
  width: 3rem;
  color: white;
  display: flex;
  @media screen and (max-width: 567.98px) {
    height: 1.5rem;
    width: 1.5rem;
  }

  @media screen and (max-width: 414px) {
    height: .75rem;
    width: .75rem;
  }

  :hover {
    color: #031636;
  }
}
 
a .material-design-icon.icon-resized {
  .material-design-icon__svg {
    height: 3rem;
    width: 3rem;
    color: white;
  }
}
</style>