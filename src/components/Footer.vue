<template>
    <footer :class="route === '/' ? 'home' : '' " >2021 &copy; Weather Forecast</footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        route: String
    }
}
</script>

<style lang="scss" scoped>
    footer {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba($color: #1c70df, $alpha: 0.5);
        text-align: center;
        // position: absolute;
        // left: 0;
        // bottom: 0;
        grid-row: -1/-2;
        grid-column: 1/-1;
        padding: 4px;
        transition: opacity 0.9;
        transition: transform 0.3s;
        animation: enter;
        animation-duration: 0.5s;
    }

    footer.home {
        // transform: scale(0);
        display: none;
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