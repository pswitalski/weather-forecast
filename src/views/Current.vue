<template>
    <div class="current">
        <LoadingSpinner />
        current
    </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default {
    name: 'Current',
    data() {
        return {
            isLoading: true
        }
    },
    components: {
        LoadingSpinner
    }
}
</script>

<style lang="scss" scoped>


</style>