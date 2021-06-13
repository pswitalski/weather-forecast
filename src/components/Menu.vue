<template>
    <ul :class="isMenuOpen ? 'active' : ''">
        <li><router-link to="/">Select location</router-link></li>
        <li><router-link to="/forecast">Forecast</router-link></li>
        <li><router-link to="/current">Current weather</router-link></li>
        <li><router-link to="/air">Air Condition</router-link></li>
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
        background-color: blue;
        height: 100%;
        width: 100%;

        @media (max-width: 799px) {
            position: fixed;
            top: -50%;
            left: 50%;
            transform: translate(-50%, 200%);
            flex-direction: column;
            width: 80%;
            height: 80%;
            border-radius: 20px;
            justify-content: space-around;
            transition: transform .3s;
            z-index: 10;
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
        color: black;
    }
</style>