import Vue from 'vue';
import 'vue-material-design-icons/styles.css'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';
import SpotifyIcon from 'vue-material-design-icons/Spotify.vue';
import GithubIcon from 'vue-material-design-icons/Github.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import StackOverflowIcon from 'vue-material-design-icons/StackOverflow.vue';

export default function materialIcons () {
  Vue.component('linkedin-icon', LinkedinIcon);
  Vue.component('spotify-icon', SpotifyIcon);
  Vue.component('github-icon', GithubIcon);
  Vue.component('instagram-icon', InstagramIcon);
  Vue.component('facebook-icon', FacebookIcon);
  Vue.component('twitter-icon', TwitterIcon);
  Vue.component('stackoverflow-icon', StackOverflowIcon);
}