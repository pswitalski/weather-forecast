<template>
    <div class="container">
        <div>
            <h2>{{name}}, {{country.country}}</h2>
            <div class="info">
                <p>{{weather.description}}</p>
                <img :src="`http://openweathermap.org/img/wn/${weather.icon}.png`" alt="weather">
                <p>{{temp}} °C</p>
            </div>
        </div>
        <div class="sun">
            <div>
                <img src="../assets/icons/sunrise.png" alt="sunrise">
                <p>{{sunrise}}</p>
            </div>
            <div>
                <img src="../assets/icons/sunset.png" alt="sunset">
                <p>{{sunset}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getEventHour } from '../utils/formatDataFromApi';

export default {
    name: 'LocationDisplay',
    props: {
        name: String,
        country: Object,
        weather: Object,
        temp: Number
    },
    data() {
        return {
            sunrise: '',
            sunset: ''
        }
    },
    mounted() {
        this.sunrise = getEventHour(this.country.sunrise);
        this.sunset = getEventHour(this.country.sunset);
        if (this.name === '') {
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        grid-column: 1/-1;
    }
    .info {
        display: flex;
        align-items: center;
    }

    img {
        height: 60px;
    }

    .sun {
        display: flex;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>