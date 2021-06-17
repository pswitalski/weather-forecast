<template>
    <div class="container">
        <LoadingSpinner v-if="isLoading" />
        <h2 v-if="!isLoading">Air polution</h2>
        <h3 v-if="!isLoading">Overall air quality: <span :style="{color: gradeColor}" >{{airComment}}</span></h3>
        <ul v-if="!isLoading">
            <li v-for="(value, name) in airParams" :key="name">{{name}}: {{value}} ppm</li>
        </ul>
    </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
import axios from 'axios';
import api from '../utils/api';
import { getAirConditionGrade } from '../utils/formatDataFromApi';

export default {
    name: "AirCondition",
    components: {
        LoadingSpinner
    },
    data() {
        return {
            isLoading: true,
            airParams: {},
            airGrade: '',
            airComment: ''
        }
    },
    props: {
        coord: Object
    },
    computed: {
        gradeColor() {
            switch (this.airGrade) {
                case 1:
                    return '#66ff33';
                case 2:
                    return '#00ccff';
                case 3:
                    return '#ffff00';
                case 4:
                    return 'orange';
                case 5:
                    return 'red';
            }
        }
    },
    mounted() {
        console.log(this.coord);
        axios.get(`${api.main}${api.air}?lat=${this.coord.lat}&lon=${this.coord.lon}${api.key}`)
            .then(response => {
                console.log(response.data)
                this.airParams = response.data.list[0].components;
                this.airGrade = response.data.list[0].main.aqi;
            })
            .then(() =>{
                this.airComment = getAirConditionGrade(this.airGrade);
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}
</script>
