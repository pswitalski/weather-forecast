<template>
    <form @submit="handleSubmit">
        <h2>Check the weather anywhere in the world</h2>
        <label for="location">Enter location:</label>
        <input type="text" id="location" placeholder="Your city" v-model="location" :class="isError ? 'inputError' : ''">
        <button type="submit">Search</button>
        <div class="error-field">
            <p :class="isError ? 'errorMessage' : ''">{{errorMessage}}</p>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SelectLocation',
    data() {
        return {
        location: '',
        errorMessage: '',
        isError: false
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.location === '') {
                this.errorMessage =  "You must enter location.";
                this.isError = true;
            }
            console.log(this.location)
            console.log(this.errorMessage)
        }
    }
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
        transition: box-shadow 0.5s;

        @media (min-width: 800px) {
            font-size: 22px;
        }
    }

    input::placeholder {
        color:rgba($color: #615e5e, $alpha: 0.9);
        transition: color 0.5s;
    }

    button:hover, input:hover {
        background-color: rgba($color: rgb(0, 247, 255), $alpha: 0.8);
    }

    input:focus {
         background-color: rgba($color: rgb(0, 247, 255), $alpha: 0.8);
    }

    input:focus, button:focus {
        box-shadow: 0 0 5px 5px rgba(41, 16, 16, 0.788);
    }

    input.inputError {
        box-shadow: 0 0 5px 5px rgba(255, 0, 0, 0.788);
    }

    input.inputError::placeholder {
        color: rgba(255, 0, 0, 0.788)
    }

    .error-field {
        height: 20px;
    }

    p {
        transform: scale(0);
        transition: transform 0.3s;
    }

    p.errorMessage {
        transform: none;
    }
</style>