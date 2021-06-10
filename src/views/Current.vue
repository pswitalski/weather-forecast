<template>
    <div class="current">
        <LoadingSpinner v-if="isLoading" />
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


</style>