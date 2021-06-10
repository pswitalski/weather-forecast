<template>
  <div class="home container">
    <Logo is-home="true" />
    <SelectLocation @location-name="handleFindLocation" />
  </div>
</template>

<script>
import SelectLocation from '../components/SelectLocation.vue';
import Logo from '../components/Logo.vue';

export default {
  name: 'Home',
  components: {
    SelectLocation,
    Logo
  },
  methods: {
    handleFindLocation(location) {
      this.$emit('location-name', location);
    }
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

@keyframes enter {
  from {
    transform: scale(0)
  }
  to {
    transform: none;
  }
}
</style>
