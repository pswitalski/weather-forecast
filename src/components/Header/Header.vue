<template>
    <header>
        <Logo />
        <Nav />
    </header>
</template>

<script>
import Nav from '../Nav/Nav.vue';
import Logo from '../Logo/Logo.vue';

export default {
    name: 'Header',
    components: {
        Nav,
        Logo
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
    }
</style>