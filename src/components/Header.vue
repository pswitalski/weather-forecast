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
        transition: transform 0.3s;
        grid-row: 1/2;
        grid-column: 1/-1;
        animation: enter;
        animation-duration: 0.5s;
        background-color: rgba($color: #1c70df, $alpha: 0.5);
    }

    header.home {
        // transform: translateY(-50px);
        display: none;

        @media (max-width: 799px) {
            // transform: translateY(-100px) scale(0);
            // transform: scale(0);
        }
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