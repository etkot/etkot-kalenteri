<template>
    <div id="box" :style="{ height: cardOpen ? '250px' : '80px' }">
        <p id="name">{{ title }}</p>
        <div id="button">
            <p v-if="!cardOpen" id="plus" v-on:click="infoPressed">+</p>
            <p v-else id="minus" v-on:click="infoPressed">-</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
    props: {
        title: String
    },
    data() {
        return {
            cardOpen: false
        }
    },
    methods: {
        infoPressed() {
            this.cardOpen = !this.cardOpen
        }
    }
}
</script>

<style scoped>
#box {
    background-color: #404040;
    min-width: 200px;
    padding: 30px;
    padding-bottom: 15px;
    margin: 25px;
    border-radius: 10px;
    transition: 0.5s;
}
#name {
    color: white;
    font-size: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}
#button {
    background-color: grey;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    margin: auto;
    margin-top: 10px;
    transition: 0.5s;
}
#plus {
    color: white;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
}
#minus {
    color: white;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
}
</style>
