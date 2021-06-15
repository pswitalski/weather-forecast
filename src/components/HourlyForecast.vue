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
        <BarChart :chartData="pressureChart.chartData" :chartOptions="pressureChart.chartOptions" />
    </div>
</div>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading" class="chart-container">
        <BarChart :chartData="windChart.chartData" :chartOptions="windChart.chartOptions" />
    </div>
</div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import LineChart from '../components/LineChart.vue';
import BarChart from '../components/BarChart.vue';
import axios from 'axios';
import api from '../utils/api';
import { getLineChartConfig, getBarChartConfig } from '../utils/chartsConfig';
import { hourlyTempData, hourlyPressure, minHourlyPressure, hourlyWind } from '../utils/formatDataFromApi';

export default {
    name: 'HourlyForecast',
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
            OneCallResponse: {},
            tempChart: {
                chartData: {},
                chartOptions: getLineChartConfig('Hourly temperature forecast', 'Temperature [°C]', 'Hours')
            },
            pressureChart: {
                chartData: {},
                chartOptions: getBarChartConfig('Hourly pressure', 'Pressure [hPa]', 'Hours'),
            },
            windChart: {
                chartData: {},
                chartOptions: getBarChartConfig('Hourly wind speed', 'Wind speed [m/s]', 'Hours')
            }
        }
    },
    mounted() {
        this.isLoading = true;
        axios.get(`${api.main}${api.oneCall}?lat=${this.coord.lat}&lon=${this.coord.lon}&exclude=minutely,daily,current${api.units}${api.key}`)
            .then(response => {
                console.log(response.data);
                this.OneCallResponse = response.data;
                this.tempChart.chartData = hourlyTempData(response.data.hourly);
                const minPressure = minHourlyPressure(response.data.hourly);
                this.pressureChart.chartOptions = getBarChartConfig('Hourly pressure', 'Pressure [hPa]', 'Hours', minPressure)
                this.pressureChart.chartData = hourlyPressure(response.data.hourly);
                this.windChart.chartData = hourlyWind(response.data.hourly);
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