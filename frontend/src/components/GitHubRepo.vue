<template>
    <div class="container">
      <div></div>
      <nav class="navbar navbar-dark bg-success mb-3">
      </nav>
        <table class="table table-sm table-bordered">
          <thead>
            <tr>
            <th width="200">Nome do Branche</th>
            <th>Url</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="branche in branches" :key="branche" >
              <td>{{branche.name}}</td>
              <td><a :href="branche.commit.url" target="_blank" >{{branche.commit.url}}</a></td>
            </tr>
          </tbody>
        </table>
        <a href="javascript:history.go(-1)" class="btn btn-primary">Voltar</a>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GitHubRepo',
  created() {
    this.getRepo();
  },
  data() {
    return {
      branches: [],
    };
  },
  methods: {
    getRepo() {
      const url = `https://api.github.com/repos/${this.$route.params.name}/${this.$route.params.repo}/branches`;
      axios
        .get(url)
        .then((response) => {
          this.branches = response.data;
        });
    },
  },
};
</script>
