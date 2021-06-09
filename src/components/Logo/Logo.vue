<template>
    <div>
        <img :src="logo" alt="Weather Forecast">
        <h1>Weather Forecast</h1>
    </div>
</template>

<script>
    import logo from '../../assets/logo/logo.png';
    export default {
        name: 'Logo',
        data() {
            return {
                logo: logo
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        font-family: 'Staatliches', cursive;
        align-items: center;
        padding: 2px 10px 2px 4px;
        height: 100%;
        flex-basis: 100px;
    }

    img {
        max-height: 100%;
        margin-right: 5px;
    }

    h1 {
        font-size: 16px;
    }
</style>