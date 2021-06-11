<template>
    <div class="current">
        <CurrentCard :targetLocation="targetLocation" />
        <AirCondition :coord="coord" />
    </div>
</template>

<script>
import CurrentCard  from '../components/CurrentCard.vue';
import AirCondition from '../components/AirCondition.vue';

export default {
    name: 'Current',
    components: {
        CurrentCard,
        AirCondition
    },
    props: {
        targetLocation: String,
        coord: Object
    },
}
</script>

