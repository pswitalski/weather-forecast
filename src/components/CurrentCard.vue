<template>
    <div class="container current-card">
        <LoadingSpinner v-if="isLoading" class="loading" />
            <h2 v-if="!isLoading" >Current weather in {{currentTarget.name}}</h2>
            <ValueDisplay v-if="!isLoading" name="Apparent temperature" unit="°C" :value="currentTarget.main.feels_like.toFixed()" icon="temp" />
            <ValueDisplay v-if="!isLoading" name="Pressure" unit="hPa" :value="currentTarget.main.pressure" icon="pressure" />
            <ValueDisplay v-if="!isLoading" name="Wind speed" unit="m/s" :value="currentTarget.wind.speed" icon="wind" />
            <ValueDisplay v-if="!isLoading" name="Wind direction" unit="deg" :value="currentTarget.wind.deg" icon="windDeg" :animation="true" />
            <ValueDisplay v-if="!isLoading" name="Humidity" unit="%" :value="currentTarget.main.humidity" icon="humidity" />
            <ValueDisplay v-if="!isLoading" name="Visibility" unit="m" :value="currentTarget.visibility" icon="visibility" />
            <ValueDisplay v-if="!isLoading && isSnow" name="Snow" unit="mm" :value="currentTarget.snow['1h']" icon="snow" />
            <ValueDisplay v-if="!isLoading && isRain" name="Rain" unit="mm" :value="currentTarget.rain['1h']" icon="rain" />
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
            currentTarget: {},
            isSnow: false,
            isRain: false
        }
    },
    mounted() {
        this.isSnow = false;
        this.isRain = false;
        console.log('api request');
        this.isLoading = true;
        console.log(this.targetLocation);
        axios.get(`${api.main}${api.current}?q=${this.targetLocation}&units=metric${api.key}`)
            .then(response => {
                console.log(response.data);
                this.currentTarget = response.data;
                if ('snow' in response.data) {
                    this.isSnow = true;
                }
                if ('rain' in response.data) {
                    this.isRain = true;
                }
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
    .loading {
        grid-column: 1/-1;
    }

    .current-card {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 70px;
        grid-column: 1/-1;

        @media (min-width: 500px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 1600px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    h2 {
        grid-column: 1/-1;
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
    }
</style>