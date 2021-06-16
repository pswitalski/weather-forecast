<template>
    <div class="forecast content">
        <HourlyForecast :coord="coord" />
    </div>
</template>

<script>
import HourlyForecast from '../components/HourlyForecast.vue'

export default {
    name: "Hourly",
    components: {
        HourlyForecast
    },
    props: {
        coord: Object
    },

}
</script>