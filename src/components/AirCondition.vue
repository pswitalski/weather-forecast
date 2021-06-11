<template>
    <div class="container">
        <LoadingSpinner v-if="isLoading" />
        <h2 v-if="!isLoading">Air polution</h2>
        <ul v-if="!isLoading">
            <li v-for="(value, name) in airParams" :key="name">{{name}}: {{value}} ppm</li>
        </ul>
    </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
import axios from 'axios';
import api from '../utils/api';

export default {
    name: "AirCondition",
    components: {
        LoadingSpinner
    },
    data() {
        return {
            isLoading: true,
            airParams: {}
        }
    },
    props: {
        coord: Object
    },
    mounted() {
        console.log(this.coord);
        axios.get(`${api.main}${api.air}?lat=${this.coord.lat}&lon=${this.coord.lon}${api.key}`)
            .then(response => {
                console.log(response.data)
                this.airParams = response.data.list[0].components
            })
            .then(() =>{
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}
</script>
