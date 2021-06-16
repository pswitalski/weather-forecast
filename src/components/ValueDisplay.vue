<template>
    <div class="value-display" >
        <div class="name">
            <h4>{{name}}</h4>
            <img :class="animation ? 'animated' : ''" :style="cssVars" :src="require(`../assets/icons/${icon}.png`)" :alt="name">
        </div>
        <div class="counter">
            <p class="value">{{value}}</p>
        </div>
        <p class="unit">{{unit}}</p>
    </div>
</template>

<script>
export default {
    name: "ValueDisplay",
    props: ['name', 'unit', 'value','icon', 'animation'],
    computed:{
        cssVars() {
            if(this.animation) {
            return {
                '--rotation-deg': this.value + 'deg'
            }} else {
                return null
            }
        }
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@100;300;400;700;800&display=swap');

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .value {
        font-family: 'Big Shoulders Stencil Display', cursive;
        font-weight: 800;
        font-size: 32px;
    }

    h4 {
        font-size: 24px;
        text-align: center;
    }

    img {
        height: 50px;
    }

    img.animated {
        animation: rotate 1s forwards;
        animation-delay: 0.8s;

    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(var(--rotation-deg));
        }
    }

</style>