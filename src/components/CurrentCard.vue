<template>
    <div class="container">
        <LoadingSpinner v-if="isLoading" />
            <h2 v-if="!isLoading" >{{currentTarget.name}}, {{currentTarget.sys.country}}</h2>
            <p v-if="!isLoading" >Temperature: {{currentTarget.main.temp.toFixed()}}&deg;C</p>
            <p v-if="!isLoading" >Feels like: {{currentTarget.main.feels_like.toFixed()}}&deg;C</p>
            <p v-if="!isLoading" >Today's maximum temperature: {{currentTarget.main.temp_max.toFixed()}}&deg;C</p>
            <p v-if="!isLoading" >Today's mainimum temperature: {{currentTarget.main.temp_min.toFixed()}}&deg;C</p>
            <p v-if="!isLoading" >Pressure: {{currentTarget.main.pressure}} hPa</p>
            <p v-if="!isLoading" >Humidity: {{currentTarget.main.humidity}}%</p>
            <p v-if="!isLoading" >Wind speed: {{currentTarget.wind.speed}} m/s</p>
            <p v-if="!isLoading" >Weather: {{currentTarget.weather[0].description}}</p>
            <p v-if="!isLoading" >icon</p>
    </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import axios from 'axios';
import api from '../utils/api';

export default {
    name: 'CurrentCard',
    components: {
        LoadingSpinner
    },
    props: {
        targetLocation: String
    },
    data() {
        return {
            isLoading: true,
            currentTarget: {}
        }
    },
    mounted() {
        console.log('api request');
        this.isLoading = true;
        console.log(this.targetLocation);
        axios.get(`${api.main}${api.current}?q=${this.targetLocation}&units=metric${api.key}`)
            .then(response => {
                console.log(response.data);
                this.currentTarget = response.data;
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