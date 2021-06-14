<template>
    <div class="container">
        <h2>{{name}}, {{country}}</h2>
        <div class="info">
            <p>{{weather.description}}</p>
            <img :src="`http://openweathermap.org/img/wn/${weather.icon}.png`" alt="">
            <p>{{temp}} °C</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LocationDisplay',
    props: {
        name: String,
        country: String,
        weather: Object,
        temp: Number
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .info {
        display: flex;
        align-items: center;
    }

    img {
        height: 60px;
    }
</style>