<template>
    <div :class="isPopUpClosed ? 'closed' : ''">
        <h3>This website uses cookies</h3>
        <p>This website uses cookies to save history of searched locations. By using the website, you consent to the use of cookies.</p>
        <button @click="acceptCookieHandler" >Accept cookies</button>
        <button @click="closeHandler" >Close</button>
    </div>
</template>

<script>
import { createCookie } from '../utils/cookie';

export default {
    name: "CookieInfo",
    data() {
        return {
            isPopUpClosed: false
        }
    },
    methods: {
        closeHandler() {
            this.isPopUpClosed = true;
        },
        acceptCookieHandler() {
            createCookie('cookiesAccepted', true);
            this.isPopUpClosed = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba($color: #1c70df, $alpha: 1);
        border-radius: 25px;
        padding: 10px;
        text-align: center;
        width: 80%;
        max-width: 1000px;
    }

    button {
        padding: 5px 10px;
        width: 120px;
        height: 30px;
        margin: 5px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
    }

    .closed {
        display: none;
    }
</style>
