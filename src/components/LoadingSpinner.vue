<template>
    <div>
        <img src="../assets/icons/loading.png" alt="loading">
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner'
}
</script>

<style lang="scss" scoped>
div {
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    animation: rotation infinite linear;
    animation-duration: 1s;
    animation-timing-function: steps(8, end);
    height: 50px;
    filter: grayscale(1);
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>