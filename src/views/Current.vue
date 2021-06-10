<template>
    <div class="current">
        <LoadingSpinner v-if="isLoading" />
        current
    </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';

import api from '../utils/api';

export default {
    name: 'Current',
    data() {
        return {
            isLoading: true
        }
    },
    components: {
        LoadingSpinner
    },
    props: {
        location: String
    },
    async mounted() {
        console.log(this.location);
    //       const response = await fetch(`${api.main}${api.current}?q=${location}&units=metric${api.key}`);
    //   console.log(response)
    //   const data = await response.json();
    //   console.log(data)
    }
}
</script>

<style lang="scss" scoped>


</style>