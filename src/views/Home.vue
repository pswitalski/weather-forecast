<template>
  <div class="home">
    <Logo is-home="true" />
    <select-location />
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
  }
}
</script>
