<template>
    <div :class="isHome ? 'homeLogo' : '' ">
        <img :src="logo" alt="Weather Forecast">
        <h1>Weather Forecast</h1>
    </div>
</template>

<script>
    import logo from '../assets/logo/logo.png';
    export default {
        name: 'Logo',
        data() {
            return {
                logo: logo
            }
        },
        props: {
            isHome: String
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

    div.homeLogo {
        flex-direction: column;

        h1 {
            font-size: 32px;

            @media (max-width: 800px) {
                font-size: 28px;
            }
        }

        img {
        height: 200px;
        width: auto;

        @media (max-width: 800px) {
            height: 100px;
        }

        }
    }

    img {
        max-height: 100%;
        margin-right: 5px;
    }

    h1 {
        font-size: 16px;
        text-align: center;
    }
</style>