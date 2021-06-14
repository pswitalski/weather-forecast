<template>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading" class="chart-container">
        <LineChart :chartData="chartData" :chartOptions="chartOptions" />
    </div>
    daily
</div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import LineChart from '../components/LineChart.vue';

import axios from 'axios';
import api from '../utils/api';
import { DailyFormatData } from '../utils/formatDataFromApi';

export default {
    name: 'DailyForecast',
    components: {
        LoadingSpinner,
        LineChart
    },
    props: {
        coord: Object
    },
    data() {
        return {
            isLoading: true,
            OneCallResponse: {},
            chartData: {},
            chartOptions: {
            responsive: true,
            maintainAspectRatio: false,

    //         animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: 'linear',
    //     from: 1,
    //     to: 0,
    //     loop: true
    //   }
    // },

        }
        }
    },
    mounted() {
        this.isLoading = true;
        axios.get(`${api.main}${api.oneCall}?lat=${this.coord.lat}&lon=${this.coord.lon}&exclude=minutely,hourly,current${api.units}${api.key}`)
            .then(response => {
                console.log(response.data.daily);
                this.OneCallResponse = response.data;
                this.chartData = DailyFormatData(response.data.daily)


                this.isLoading = false;
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}
</script>

<style lang="scss" scoped>
    .chart-container {
        background-color: rgb(255, 255, 255);
    }
</style>