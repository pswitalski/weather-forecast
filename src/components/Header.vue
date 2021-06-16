<template>
    <header :class="route === '/' ? 'home' : '' ">
        <Logo  />
        <Nav />
    </header>
</template>

<script>
import Nav from './Nav.vue';
import Logo from './Logo.vue';

export default {
    name: 'Header',
    components: {
        Nav,
        Logo
    },
    props: {
        route: String
    }

}
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: green;
        transition: transform 0.3s;
        grid-row: 1/2;
        grid-column: 1/-1;
    }

    header.home {
        transform: translateY(-50px);

        @media (max-width: 799px) {
            transform: translateY(-100px) scale(0);
        }
    }
</style>