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
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading" class="chart-container">
        <BarChart :chartData="windChart.chartData" :chartOptions="windChart.chartOptions" />
    </div>
</div>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading" class="chart-container">
        <BarChart :chartData="percentageChart.chartData" :chartOptions="percentageChart.chartOptions" />
    </div>
</div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
import LineChart from './LineChart.vue';
import BarChart from './BarChart.vue';

import axios from 'axios';
import api from '../utils/api';
import { dailyTempData, dailyPressure, dailyWind, dailyPercentage,checkAttendance } from '../utils/formatDataFromApi';
import { getBarChartConfig, getLineChartConfig } from '../utils/chartsConfig';

Chart.defaults.global.legend.labels.usePointStyle = true;

export default {
    name: 'Forecast',
    components: {
        LoadingSpinner,
        LineChart,
        BarChart
    },
    props: {
        coord: Object
    },
    data() {
        return {
            isLoading: true,
            isRain: false,
            isSnow: false,
            OneCallResponse: {},
            tempChart: {
                chartData: {},
                chartOptions: getLineChartConfig('Daily temperature forecast', 'Temperature [°C]')
            },
            pressureChart: {
                chartData: {},
                chartOptions: getLineChartConfig('Daily pressure', 'Pressure [hPa]')
            },
            windChart: {
                chartData: {},
                chartOptions: getBarChartConfig('Daily wind speed', 'Wind speed [m/s]')
            },
            percentageChart: {
                chartData: {},
                chartOptions: getBarChartConfig('Cloudiness, humidity and probability of precipitation', '[%]', '', 0, 100)
            }
        }
    },
    mounted() {
        this.isLoading = true;
        this.isRain = false;
        this.isSnow = false;
        axios.get(`${api.main}${api.oneCall}?lat=${this.coord.lat}&lon=${this.coord.lon}&exclude=minutely,hourly,current${api.units}${api.key}`)
            .then(response => {
                console.log(response.data.daily);
                this.OneCallResponse = response.data;
                this.tempChart.chartData = dailyTempData(response.data.daily);
                this.pressureChart.chartData = dailyPressure(response.data.daily);
                this.windChart.chartData = dailyWind(response.data.daily);
                this.percentageChart.chartData =  dailyPercentage(response.data.daily);
                this.isRain = checkAttendance(response.data.daily, 'rain');
                this.isSnow = checkAttendance(response.data.daily, 'snow');
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