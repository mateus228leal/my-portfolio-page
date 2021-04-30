<template>
  <div id="main">
    <img class="rounded" v-bind:src="linkGithubProfilePicture" alt="Me! Drew!">
    <h1>Hi! My name is Mateus Leal, also known as Drew, I'm a JavaScript & PHP Web Developer.</h1>
    <div class="social">
      <a href="https://github.com/mateus228leal" target="_blank">
        <github-icon class="icon-resized" :size="1000"/>
      </a>
      <a href="https://stackoverflow.com/users/15743372/user15743372" target="_blank">
        <stackoverflow-icon class="icon-resized" :size="1000"/>
      </a>
      <a href="https://twitter.com/thesidecharac" target="_blank">
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
import GitHubService from '~/services/gitHubService';

export default ({
  data() {
    return {
      linkGithubProfilePicture: ''
    }
  },
  async fetch() {
    await GitHubService.getUser('mateus228leal').then(userData => {
      const { data } = userData;
      this.linkGithubProfilePicture = data.avatar_url;
    });
  }
})
</script>


<style lang="scss" scoped>
#main {
  max-width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  img {
    align-self: center;
  }
}

h1 {
  line-height: 1;
}

.rounded {
  border-radius: 50%;
  max-width: 20rem;
  margin-bottom: 2rem;
}

.social {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

a .material-design-icon.icon-resized {
  height: 3rem;
  width: 3rem;
  color: white;
}
 
a .material-design-icon.icon-resized {
  .material-design-icon__svg {
    height: 3rem;
    width: 3rem;
    color: white;
  }
}
</style>