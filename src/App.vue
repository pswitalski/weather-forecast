<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
}

</style>
