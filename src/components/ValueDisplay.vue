<template>
    <div class="value-display" >
        <div class="name">
            <h4>{{name}}</h4>
            <img src="../assets/icons/pressure.png" alt="pressure">
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
    props: {
        name: String,
        unit: String,
        value: Number
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
        background-color: red;
    }

    .value {
        font-family: 'Big Shoulders Stencil Display', cursive;
        font-weight: 800;
        font-size: 32px;
    }

    h4 {
        font-size: 24px;
    }

    img {
        height: 50px;
    }

</style>