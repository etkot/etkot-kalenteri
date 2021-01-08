<template>
    <div id="box" :style="{ 'max-height': cardOpen ? '500px' : '80px' }">
        <p id="name">{{ title }}</p>
        <div v-if="!cardOpen" id="button" v-on:click="infoPressed">
            <p id="plus">+</p>
        </div>
        <div v-else>
            <p id="info">1.3.2021</p>
            <p id="info">4.5.2021</p>
            <p id="info">12.12.2021</p>
            <div id="button" v-on:click="infoPressed">
                <p id="minus">-</p>
            </div>
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
    transition: 0.15s ease-out;
    overflow: hidden;
}
#name {
    color: white;
    font-size: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}
#info {
    color: white;
    font-size: 25px;
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
