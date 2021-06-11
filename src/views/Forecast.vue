<template>
    <div class="forecast">
        <HourlyForecast :coord="coord" />
    </div>
</template>

<script>


import HourlyForecast from '../components/HourlyForecast.vue'

export default {
    name: "Forecast",
    components: {
        HourlyForecast
    },
    props: {
        coord: Object
    },

}
</script>