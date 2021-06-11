<template>
    <div class="forecast">
        <HourlyForecast :coord="coord" />
        <DailyForecast :coord="coord" />
    </div>
</template>

<script>

import DailyForecast from '../components/DailyForecast.vue'
import HourlyForecast from '../components/HourlyForecast.vue'

export default {
    name: "Forecast",
    components: {
        HourlyForecast,
        DailyForecast
    },
    props: {
        coord: Object
    },

}
</script>