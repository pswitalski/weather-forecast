<template>
    <div class="air-display">
        <h4>{{sub[0]}}<sub>{{sub[1]}}</sub></h4>
        <div class="value-container">
            <div class="value-background"></div>
            <p class="value">{{value}}</p>
        </div>
        <p class="unit">μg/m<sup>3</sup></p>

    </div>
</template>

<script>
export default {
    name: "AirValueDisplay",
    props: ['name', 'value'],
    computed: {
        sub() {
            const letters = this.name.split('');
            const toName = [];
            const toSub = [];

            letters.forEach(element => {
                if (element.match(/[0-9]/g)) {
                    toSub.push(element);
                }else if (element === '_') {
                    toSub.push('.');
                } else {
                    toName.push(element);
                }
            });

            const name = toName.join('');
            const sub = toSub.join('');

            const splitName = [name, sub];
            return splitName;
        }
    }
}
</script>

<style lang="scss" scoped>
.air-display {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.value-container {
    position: relative;
    width: 120px;
    height: 120px;
}

.value-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../assets/icons/cloud.png');
    filter: invert(1);
    background-size: cover;
}

.value {
    font-family: 'Big Shoulders Stencil Display', cursive;
    font-weight: 800;
    font-size: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

h4 {
    font-size: 24px;
    text-align: center;
}
</style>