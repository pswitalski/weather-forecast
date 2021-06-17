<template>
    <ul :class="isMenuOpen ? 'active' : ''">
        <li><router-link to="/">Select location</router-link></li>
        <li><router-link to="/current">Current weather</router-link></li>
        <li><router-link to="/hourly">Hourly Forecast</router-link></li>
        <li><router-link to="/daily">Daily Forecast</router-link></li>
        <li><router-link to="/air">Air Condition</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><button @click="closeMenuHandler"><img :src="closeIcon" alt="close menu" class="closeMenu"></button></li>
    </ul>
</template>

<script>
import closeIcon from '../assets/icons/close.png';

export default {
    name: "Menu",
    data() {
        return {
            closeIcon: closeIcon
        }
    },
    props: {
        isMenuOpen: Boolean,
    },
    methods: {
        closeMenuHandler() {
            this.$emit('close-menu');
        }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        transform: scale(0);
        height: 100%;
        width: 100%;

        @media (max-width: 799px) {

            position: fixed;
            top: -50%;
            left: 50%;
            transform: translate(-50%, 200%) scale(0);
            flex-direction: column;
            width: 80%;
            height: 80%;
            border-radius: 20px;
            justify-content: space-around;
            transition: transform .3s;
            z-index: 10;
            background-color: rgba($color: #174685, $alpha: 1);
        }

        @media (min-width: 800px) {
            transform: scale(1);
        }
    }

    ul.active {
        @media (max-width: 799px) {
            transform: translate(-50%, 75%);

        }
    }

    li {
        margin: 0 10px;
        font-size: 14px;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 3px;

        @media (max-width: 799px) {
            height: 40px;
            width: 70%;
            border-bottom: 3px solid rgba($color: #000000, $alpha: 0.5);
        }
    }

    li:last-child {
        border: none;
    }

    .closeMenu {
        height: 30px;
        width: auto;

        @media (min-width: 800px) {
            display: none;
        }
    }

    button {
        background-color: transparent;
        border: none;
    }

    a {
        text-decoration: none;
        color: white;
        transition: transform 0.4s;
    }

    .router-link-active {
        transform: scale(1.2);
        position: relative;
    }

    .router-link-active::after {
        box-sizing: inherit;
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto auto 0;
        content: ' ';
        background-color: white;
        z-index: 1000;
        animation: after 0.4s;
    }

    @keyframes after {
        from {
            transform: scaleX(0) scaleY(0);
        }
        to {
            transform: scaleX(1) scaleY(1);
        }
    }


</style>