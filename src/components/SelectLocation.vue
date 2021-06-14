<template>
    <form @submit="handleSubmit">
        <h2>Check the weather anywhere in the world</h2>
        <label for="location">Enter location:</label>
        <input type="text" id="location" placeholder="Your city" ref="input" v-model="location" :class="isError ? 'inputError' : ''">
        <button type="submit">Search</button>
        <button @click="handleGetUserLocation" >Get location</button>
        <div class="error-field">
            <p :class="isError ? 'errorMessage' : ''">{{errorMessage}}</p>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import api from '../utils/api';
import { createCookie } from '../utils/cookie';

export default {
    name: 'SelectLocation',
    props: {
        history: Array,
        historyTarget: String
    },
    watch: {
        historyTarget: {
            deep: true,
            handler: function() {
                this.$forceUpdate();
                this.location = this.historyTarget;
                this.handleApiRequest();
            }
        }
    },
    data() {
        return {
        location: '',
        coord: {},
        errorMessage: '',
        isError: false,
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.location === '') {
                this.errorMessage =  "You must enter location.";
                this.isError = true;
            } else {
                this.handleApiRequest();
            }
        },
        handleGetUserLocation(e) {
            e.preventDefault();
            window.navigator.geolocation.getCurrentPosition(this.handleGetPositionSucces, this.handleGetPositionFailure)
        },
        handleGetPositionSucces(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            axios.get(`${api.main}${api.reverse}?lat=${lat}&lon=${lon}&limit=1${api.key}`)
                .then(response => {
                    // console.log(response.data[0].name);
                    if (response.data.length === 0) {
                        this.isError = true;
                        this.errorMessage = 'Something went wrong.'
                    } else {
                        this.isError = false;
                        this.errorMessage = false;
                        this.location = response.data[0].name;
                        this.handleApiRequest();
                    }
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
        handleGetPositionFailure() {
            this.isError = true;
            this.errorMessage = 'You must allow to share your location.'
        },
        handleApiRequest() {
            axios.get(`${api.main}${api.current}?q=${this.location}&units=metric${api.key}`)
                    .then(response => {
                        this.errorMessage = '';
                        this.isError = false;
                        this.coord = response.data.coord;
                        return response;
                     })
                     .then(response => {
                         console.log(response.data.main.temp)
                         if (response.status === 200) {
                         createCookie("locations", [...this.history, response.data.name]);
                         this.$emit('location-name', [this.location, this.coord, response.data.name, response.data.sys.country, response.data.weather[0], response.data.main.temp ]);
                         }
                     }
                     )
                    .catch(error => {
                        console.log(error.response)
                        this.errorMessage = (error.response.data.message);
                        this.isError = true;
                     })
        }
    },
}
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }

    h2 {
        font-size: 18px;

        @media (min-width: 800px) {
            font-size: 22px;
        }
    }

    label {
        margin-top: 18px;
    }

    input, button {
        height: 50px;
        width: 100%;
        max-width: 500px;
        margin: 10px 30px;
        border-radius: 25px;
        border: none;
        outline: none;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: rgba($color: rgb(32, 30, 30), $alpha: .9);
        background-color: rgba($color: rgb(0, 247, 255), $alpha: 0.7);
        transition: box-shadow 0.5s;

        @media (min-width: 800px) {
            font-size: 22px;
        }
    }

    input::placeholder {
        color:rgba($color: #615e5e, $alpha: 0.9);
        transition: color 0.5s;
    }

    button:hover, input:hover {
        background-color: rgba($color: rgb(0, 247, 255), $alpha: 0.8);
    }

    input:focus {
         background-color: rgba($color: rgb(0, 247, 255), $alpha: 0.8);
    }

    input:focus, button:focus {
        box-shadow: 0 0 5px 5px rgba(41, 16, 16, 0.788);
    }

    input.inputError {
        box-shadow: 0 0 5px 5px rgba(255, 0, 0, 0.788);
    }

    input.inputError::placeholder {
        color: rgba(255, 0, 0, 0.788)
    }

    .error-field {
        height: 20px;
    }

    p {
        transform: scale(0);
        transition: transform 0.3s;
    }

    p.errorMessage {
        transform: none;
    }
</style>