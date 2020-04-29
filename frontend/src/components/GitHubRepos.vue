<template>
  <div class="container">
    <div >
        <h1>Vue.js + Github</h1>
        <p class="lead">Página que lista repositórios do VueJS e seus branches, usando Vue.js</p>
    </div>
    <br><hr><br>
    <div class="row mt-3">
      <div class="col-md-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top"
                      :src="user.avatar_url" />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Repositórios:
                            <span class="badge badge-success">{{user.public_repos}}</span>
                          </li>
                        <li class="list-group-item">Seguidores:
                          <span class="badge badge-info">{{user.followers}}</span>
                          </li>
                        <li class="list-group-item">Seguindo:
                          <span class="badge badge-primary">{{user.following}}</span>
                        </li>
                    </ul>
                    <div class="card-body">
                        <a :href="user.html_url"
                        class="btn btn-success btn-block"
                        target="_blank"
                        >Ver Perfil</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-md-8">
        <table
        class="table table-sm table-bordered">
        <thead>
            <tr>
                <th width="100">Repositório</th>
                <th>Descrição do Repositório</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="loader.getRepos">
                <td class="text-center" colspan="2">
                  <img src="/static/loading.svg" height="20">
                </td>
            </tr>

            <tr
                v-for="repo in repos"
                :key="repo">
                <td>
                    <router-link class="btn btn-success" :to="{
                      name:'GithubRepo',
                      params:{
                        name:username,
                        repo:repo.name
                        }
                      }"
                      >
                      {{repo.name}}
                    </router-link>
                </td>
                <td>
                  {{repo.description}}
                </td>
            </tr>
            <tr v-if="!!!repos.lenght === 0">
                <td class="text-center" colspan="2">
                    Nenhum Repositório Encontrado
                </td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GitHubRepos',
  data() {
    return {
      username: 'vuejs',
      user: [],
      repos: [],
      loader: {
        getRepos: false,
        getRepo: false,
      },
    };
  },
  methods: {
    getRepos() {
      if (this.username) {
        this.loader.getRepos = true;
        const url = `https://api.github.com/users/${this.username}/repos`;
        axios
          .get(url)
          .then((response) => {
            this.repos = response.data;
          }).finally(() => {
            this.loader.getRepos = false;
          });
      }
    },
    getUser() {
      const userUrl = `https://api.github.com/users/${this.username}`;
      axios
        .get(userUrl)
        .then((response) => {
          this.user = response.data;
        });
    },
  },
  mounted() {
    this.getRepos();
    this.getUser();
  },
};
</script>
