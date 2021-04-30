export default function ({ $axios }, inject) {
  const github = $axios.create({
    headers: {
      common: {
        Accept: 'application/vnd.github.v3+json'
      }
    }
  });
  github.setBaseURL('https://api.github.com');

  inject('github', github);
};
