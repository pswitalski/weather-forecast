<template>
<div class="container">
    <LoadingSpinner v-if="isLoading" />
    daily
</div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';

import axios from 'axios';
import api from '../utils/api';

export default {
    name: 'DailyForecast',
    components: {
        LoadingSpinner
    },
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
        axios.get(`${api.main}${api.oneCall}?lat=${this.coord.lat}&lon=${this.coord.lon}&exclude=minutely,hourly,current${api.units}${api.key}`)
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