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
import LoadingSpinner from '../components/LoadingSpinner.vue';
import LineChart from '../components/LineChart.vue';
import axios from 'axios';
import api from '../utils/api';
import { getLineChartConfig } from '../utils/chartsConfig';
import { hourlyTempData, getPressure } from '../utils/formatDataFromApi';

export default {
    name: 'HourlyForecast',
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
                chartOptions: getLineChartConfig('Hourly temperature forecast', 'Temperature [°C]', 'Hours')
            },
            pressureChart: {
                chartData: {},
                chartOptions: getLineChartConfig('Hourly pressure', 'Pressure [hPa]')
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
                this.pressureChart.chartData = getPressure(response.data.hourly);
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