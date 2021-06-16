<template>
    <div class="container location-history">
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

<style lang="scss" scoped>
    div {
        text-align: center;
        grid-row: 3/4;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li {
        cursor: pointer;
        padding: 5px 10px;
    }

    li:hover {
        color: #eee;
    }
</style>