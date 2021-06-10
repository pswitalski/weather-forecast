<template>
    <form>
        <h2>Check the weather anywhere in the world</h2>
        <label for="location">Enter location:</label>
        <input type="text" id="location">
        <button>Search</button>
    </form>
</template>

<script>
export default {
    name: 'SelectLocation'
}
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }

    h2 {
        font-size: 18px;

        @media (min-width: 800px) {
            font-size: 22px;
        }
    }

    label {
        margin-top: 18px;
    }

    input, button {
        height: 50px;
        width: 100%;
        max-width: 500px;
        margin: 10px 30px;
        border-radius: 25px;
        border: none;
        outline: none;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: rgba($color: rgb(32, 30, 30), $alpha: .9);
        background-color: rgba($color: rgb(0, 247, 255), $alpha: 0.7);

        @media (min-width: 800px) {
            font-size: 22px;
        }
    }
</style>