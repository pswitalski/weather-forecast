<template>
    <div class="forecast">
        <DailyForecast :coord="coord" />
    </div>
</template>

<script>
import DailyForecast from '../components/DailyForecast.vue'

export default {
    name: "Daily",
    components: {
        DailyForecast
    },
    props: {
        coord: Object
    },

}
</script>