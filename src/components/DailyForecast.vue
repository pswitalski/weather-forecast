<template>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading" class="chart-container">
        <LineChart :chartData="tempChart.chartData" :chartOptions="tempChart.chartOptions" />
    </div>
    daily
</div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import LineChart from '../components/LineChart.vue';

import axios from 'axios';
import api from '../utils/api';
import { dailyTempData } from '../utils/formatDataFromApi';

Chart.defaults.global.legend.labels.usePointStyle = true;

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
            tempChart: {
                chartData: {},
                chartOptions: {
                title: {
                    display: true,
                    text: 'Daily temperature forecast'
                },
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 5,
                        hoverRadius: 7
                    }
                },
                layout: {
                    padding: 10
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperature [°C]'
                        }
                    }]
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: '#333'
                    }
                }
            }
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