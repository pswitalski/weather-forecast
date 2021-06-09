<template>
    <nav>
        <Menu :isMenuOpen="isMenuOpen" @close-menu="openMenuHandler"/>
        <button @click="openMenuHandler">
            <img :src="menuIcon" alt="Menu">
        </button>
    </nav>
</template>

<script>
import menuIcon from '../../assets/icons/menu.png'
import Menu from '../Menu/Menu.vue';
export default {
    name: 'Nav',
    data() {
        return {
            menuIcon: menuIcon,
            isMenuOpen: false
        }
    },
    components: {
        Menu
    },
    methods: {
        openMenuHandler() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    }
}
</script>

<style lang="scss" scoped>
    nav {
        height: 100%;
        flex-basis: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        // background-color: red;
        }

    button {
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;

        @media (min-width: 800px) {
            display: none;
        }
    }

    img {
        width: 80%;
        height: 80%;
    }
</style>