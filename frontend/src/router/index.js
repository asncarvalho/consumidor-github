import Vue from 'vue';
import Router from 'vue-router';
import GitHubRepos from '@/components/GitHubRepos';
import GitHubRepo from '@/components/GitHubRepo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GithubRepos',
      component: GitHubRepos,
    },
    {
      path: '/user/repo/branches',
      name: 'GithubRepo',
      component: GitHubRepo,
    },
  ],
});
