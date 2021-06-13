<template>
    <div class="container">
        <h3>Recent searches:</h3>
        <ul>
            <li v-for="item in history" :key="item" @click="handleHistoryClick(item)" >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LocationsHistory",
    props: {
        history: Array
    },
    methods: {
        handleHistoryClick(item) {
            this.$emit('history-click', item);
        }
    }
}
</script>