<template>
<div class="container">
    hourly
</div>
</template>

<script>
import axios from 'axios';
import api from '../utils/api';

export default {
    name: 'HourlyForecast',
    props: {
        coord: Object
    },
    data() {
        return {
            isLoading: false,
            OneCallResponse: {}
        }
    },
    mounted() {
        this.isLoading = true;
        axios.get(`${api.main}${api.oneCall}?lat=${this.coord.lat}&lon=${this.coord.lon}&exclude=minutely,daily,current${api.units}${api.key}`)
            .then(response => {
                console.log(response.data);
                this.OneCallResponse = response.data;
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}
</script>