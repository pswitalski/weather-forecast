<template>
  <div class="home">
    <Logo is-home="true" />
    <SelectLocation />
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

<style lang="scss" scoped>
  div {
    color: rgba($color: rgb(248, 238, 238), $alpha: .9)
    }
</style>
