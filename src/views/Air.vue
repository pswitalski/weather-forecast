<template>
    <div class="air content">
        <AirCondition :coord="coord" />
    </div>
</template>

<script>
import AirCondition from '../components/AirCondition.vue';

export default {
    name: "Air",
    components: {
        AirCondition
    },
    props: {
        coord: Object
    }
}
</script>