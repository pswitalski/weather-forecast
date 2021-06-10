<template>
  <div class="background"></div>
  <Header :route="isHome" />
  <router-view/>
  <Footer :route="isHome" />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    isHome() {
      return this.$route.path
    }
  },
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

#app {
  position: relative;
  min-height: 100vh;
}

.background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -10;
  background-image: url('./assets/img/background/background_comporessed.jpg');
  background-size: cover;
  background-position: center center;
  filter: grayscale(40%);
}

</style>
