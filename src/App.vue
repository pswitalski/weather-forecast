<template>
  <div class="background"></div>
  <Header :route="isHome" />
  <LocationDisplay v-if="isHome !== '/'" :name="locationFromResponse" :country="countryFromResponse" :weather="weatherFromResponse" :temp="tempFromResponse" />
  <router-view @location-name="handleFindLocation" :targetLocation="this.location" :coord="this.coord" />
  <Footer :route="isHome" />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import LocationDisplay from './components/LocationDisplay.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LocationDisplay
  },
  computed: {
    isHome() {
      return this.$route.path
    }
  },
  data() {
    return {
      location: '',
      locationFromResponse: '',
      countryFromResponse: {},
      weatherFromResponse: {},
      tempFromResponse: '',
      coord: {},
      time: ''
    }
  },
  methods: {
    handleFindLocation(data) {
      this.location = data[0];
      this.coord = data[1];
      this.locationFromResponse = data[2];
      this.countryFromResponse = data[3];
      this.weatherFromResponse = data[4];
      this.tempFromResponse = data[5];
      this.$router.push('/current');
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@100;300;400;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  color: white;
  // height: fit-content;
  //  background-image: url('./assets/img/background/background_comporessed.jpg');
  // background-size: cover;
  // background-position: center center;
  // filter: grayscale(40%);
  // z-index: -10;
}



#app {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content min-content auto min-content;
}

.content {
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 1200px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

// #app::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;

// }

.background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -10;
  background-image: url('./assets/img/background/thunderstorm.jpg');
  background-size: cover;
  background-position: center center;
  filter: grayscale(40%);
}

.container {
  width: auto;
  height: auto;
  margin: 20px;
  padding: 14px;
  border-radius: 30px;
  // background-color: rgba($color: #141414, $alpha: 0.7);
  // background-color: rgba($color: #1c70df, $alpha: 0.7);
  background-color: rgba($color: #1c70df, $alpha: 0.5);
  animation: enter;
  animation-duration: 0.5s;
  overflow: hidden;
  position: relative;
  // overflow-x: scroll;
}

@keyframes enter {
  from {
    transform: scale(0)
  }
  to {
    transform: none;
  }
}

</style>
