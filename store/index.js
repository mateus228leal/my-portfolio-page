import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import GitHubService from '../services/githubService';

const createStore = () => {
  return new Vuex.Store({
    state: {
      linkGithubProfilePicture: '',
    },
    mutations: {
      SET_LINK_GITHUB_PROFILE_PICTURE(state, link) {
        state.linkGithubProfilePicture = link;
      }
    },
    actions: {
      async fetchLinkGithubProfilePicture(context) {
        await GitHubService.getUser('mateus228leal').then(res => {
          const { data } = res;
          console.log(data)
          context.commit('SET_LINK_GITHUB_PROFILE_PICTURE', data.avatar_url);
        })
        .catch(error => {
          alert (error);
        });
      }
    },
    getters: {
      
    }
  });
}

export default createStore;