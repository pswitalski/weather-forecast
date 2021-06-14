<template>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading" class="chart-container">
        <LineChart :chartData="tempChart.chartData" :chartOptions="tempChart.chartOptions" />
    </div>
</div>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading" class="chart-container">
        <LineChart :chartData="pressureChart.chartData" :chartOptions="pressureChart.chartOptions" />
    </div>
</div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
import LineChart from './LineChart.vue';

import axios from 'axios';
import api from '../utils/api';
import { dailyTempData, getPressure } from '../utils/formatDataFromApi';
import { getLineChartConfig } from '../utils/chartsConfig';

Chart.defaults.global.legend.labels.usePointStyle = true;

export default {
    name: 'Forecast',
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
            tempChart: {
                chartData: {},
                chartOptions: getLineChartConfig('Daily temperature forecast', 'Temperature [°C]')
            },
            pressureChart: {
                chartData: {},
                chartOptions: getLineChartConfig('Daily pressure', 'Pressure [hPa]')
            }


        }
    },
    mounted() {
        this.isLoading = true;
        axios.get(`${api.main}${api.oneCall}?lat=${this.coord.lat}&lon=${this.coord.lon}&exclude=minutely,hourly,current${api.units}${api.key}`)
            .then(response => {
                console.log(response.data.daily);
                this.OneCallResponse = response.data;
                this.tempChart.chartData = dailyTempData(response.data.daily);
                this.pressureChart.chartData = getPressure(response.data.daily);
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
        border-radius: 5px;
    }
</style>