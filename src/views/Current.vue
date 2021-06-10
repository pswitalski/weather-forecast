<template>
    <div class="current container">
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

import api from '../utils/api';
import axios from 'axios';

export default {
    name: 'Current',
    data() {
        return {
            isLoading: true,
            currentTarget: {}
        }
    },
    components: {
        LoadingSpinner
    },
    props: {
        targetLocation: String
    },
    mounted() {
        console.log(this.location);
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
    //       const response = await fetch(`${api.main}${api.current}?q=${location}&units=metric${api.key}`);
    //   console.log(response)
    //   const data = await response.json();
    //   console.log(data)
    }
}
</script>

<style lang="scss" scoped>
.container {
  width: auto;
  height: auto;
  margin: 20px;
  padding: 14px;
  border-radius: 30px;
  background-color: rgba($color: #141414, $alpha: 0.7);
  animation: enter;
  animation-duration: 0.5s;
}

@keyframes enter {
  from {
    transform: scale(0)
  }
  to {
    transform: none;
  }
}

</style>