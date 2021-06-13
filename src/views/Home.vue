<template>
  <div class="home container">
    <Logo is-home="true" />
    <SelectLocation @location-name="handleFindLocation" :history="history" :historyTarget="historyTarget" />
  </div>
    <LocationsHistory v-if="history.length > 0" :history="history" @history-click="setHistoryTarget" />
</template>

<script>
import SelectLocation from '../components/SelectLocation.vue';
import LocationsHistory from '../components/LocationsHistory.vue';
import Logo from '../components/Logo.vue';
import { readCookie } from '../utils/cookie';

export default {
  name: 'Home',
  components: {
    SelectLocation,
    Logo,
    LocationsHistory
  },
  methods: {
    handleFindLocation(location) {
      this.$emit('location-name', location);
    },
    setHistoryTarget(historyTarget) {
      this.historyTarget = historyTarget;
    }
  },
  data() {
    return {
      history: [],
      historyTarget: ''
    }
  },
  mounted() {

        const cookie = decodeURI(readCookie('locations'));
        const history = cookie.split(',');
        if (history[0] === "null") {
          history.length = 0;
        }
        if (history.length > 5) {
          const deleteCount = history.length - 5;
          history.splice(0, deleteCount);
        }
        console.log(history)
        this.history = history;

    },
}
</script>

<style lang="scss" scoped>
  div {
    color: rgba($color: rgb(248, 238, 238), $alpha: .9)
    }

    .container {
  width: auto;
  height: auto;
  margin: 20px;
  padding: 14px;
  border-radius: 30px;
  background-color: rgba($color: #141414, $alpha: 0.7);
  animation: enter;
  animation-duration: 0.5s;
}

.home, .location-history {
  transform: translateY(-50px);
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
