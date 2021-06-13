<template>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    <LineChart :chartData="chartData" :chartOptions="chartOptions" />
    daily
</div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import LineChart from '../components/LineChart.vue';

import axios from 'axios';
import api from '../utils/api';

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
            isLoading: false,
            OneCallResponse: {},
            chartData: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'Temperature',
          backgroundColor: '#ddd',
          data: [10, 12, 9, 14, 10, 20, 18],
          fill: false
        },
        {
          label: 'Temperature',
          backgroundColor: '#333',
          data: [20, 12, 9, 14, 10, 20, 18],
          fill: false
        }
        ],
     },
            chartOptions: {
        responsive: true
        }
        }
    },
    mounted() {
        this.isLoading = true;
        axios.get(`${api.main}${api.oneCall}?lat=${this.coord.lat}&lon=${this.coord.lon}&exclude=minutely,hourly,current${api.units}${api.key}`)
            .then(response => {
                console.log(response.data.daily);
                this.OneCallResponse = response.data;



                this.isLoading = false;
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}
</script>