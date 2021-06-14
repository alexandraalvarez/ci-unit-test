<template>
    <button @click="fetchResults">Click me!</button>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            value: null
        }
        
    },
    methods: {
        async fetchResults () {
            const response = await axios.get('mock/service')
            this.value = response.data
        }
    }
}
</script>

<style scoped>
button {
    width: 100px;
    height: 50px;
    background-color: blueviolet;
    color: cornsilk;
}
</style>
