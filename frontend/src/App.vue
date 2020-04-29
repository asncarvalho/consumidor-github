<template>
  <div id="app">
    <Header />
        <nav class="navbar navbar-expand-md navbar-dark bg-darg">
        <a href="#" class="navbar-brand">Vue.js</a>
        <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>

    <br>

    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

