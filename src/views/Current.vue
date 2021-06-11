<template>
    <div class="current">
        <CurrentCard :targetLocation="targetLocation" />

    </div>
</template>

<script>
import CurrentCard  from '../components/CurrentCard.vue'

export default {
    name: 'Current',
    components: {
        CurrentCard
    },
    props: {
        targetLocation: String
    },
}
</script>

<style lang="scss" scoped>

</style>