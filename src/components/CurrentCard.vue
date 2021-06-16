<template>
    <div class="container current-card">
        <LoadingSpinner v-if="isLoading" />
            <h2 v-if="!isLoading" >Current weather in {{currentTarget.name}}</h2>
            <!-- <p v-if="!isLoading" >Temperature: {{currentTarget.main.temp.toFixed()}}&deg;C</p>
            <p v-if="!isLoading" >Feels like: {{currentTarget.main.feels_like.toFixed()}}&deg;C</p>


            <p v-if="!isLoading" >Humidity: {{currentTarget.main.humidity}}%</p>
            <p v-if="!isLoading" >Wind speed: {{currentTarget.wind.speed}} m/s</p>
            <p v-if="!isLoading" >Weather: {{currentTarget.weather[0].description}}</p>
            <p v-if="!isLoading" >icon</p>
            <p v-if="!isLoading" >visibility: {{currentTarget.visibility}} m</p>
            <p v-if="!isLoading" >dew point</p>
            <p v-if="!isLoading" >wind deg: {{currentTarget.wind.deg}}</p>
            <p v-if="!isLoading" >UV</p> -->

            <ValueDisplay v-if="!isLoading" name="Pressure" unit="hPa" :value="currentTarget.main.pressure" />
            <ValueDisplay v-if="!isLoading" name="Pressure" unit="hPa" :value="currentTarget.main.pressure" />
            <ValueDisplay v-if="!isLoading" name="Pressure" unit="hPa" :value="currentTarget.main.pressure" />
            <ValueDisplay v-if="!isLoading" name="Pressure" unit="hPa" :value="currentTarget.main.pressure" />
            <ValueDisplay v-if="!isLoading" name="Pressure" unit="hPa" :value="currentTarget.main.pressure" />
    </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import ValueDisplay from '../components/ValueDisplay.vue';
import axios from 'axios';
import api from '../utils/api';

export default {
    name: 'CurrentCard',
    components: {
        LoadingSpinner,
        ValueDisplay
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

<style lang="scss" scoped>
    .current-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 40px;
    }

    h2 {
        grid-column: 1/-1;
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>