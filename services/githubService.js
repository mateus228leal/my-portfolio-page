import clientAPI from './axiosConfig';

const baseURL = 'https://api.github.com';
export default {
  getUser(name) {
    return clientAPI(baseURL).get('/users/' + name);
  },
  getRepos(name){
    return clientAPI(baseURL).get('/users/' + name+'/repos');

  },
  getEvents(name,page){

    return clientAPI(baseURL).get('/users/' + name+'/events?per_page=100&page='+page);

  },
  getLastYearCommits(name,repo){

    return clientAPI(baseURL).get('/repos/' + name+'/'+repo+'/stats/commit_activity');

  }

};