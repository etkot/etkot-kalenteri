<template>
    <div id="box" :style="{ 'max-height': cardOpen ? '500px' : '80px' }">
        <p id="name">{{ title }}</p>
        <div v-if="!cardOpen" id="button" v-on:click="infoPressed">
            <p id="plus">+</p>
        </div>
        <div v-else>
            <div v-if="dates.length">
                <ul id="info">
                    <li v-for="(date, index) in dates" :key="`error-${index}`">
                        <input id="checkbox" type="checkbox" /> {{ date }}
                    </li>
                    <p>
                        <input id="vote-button" type="submit" value="Vote" />
                    </p>
                </ul>
                <div id="button" v-on:click="infoPressed">
                    <p id="minus">-</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
    props: {
        title: String,
        dates: Array
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
    margin-bottom: 5px;
}
#info {
    color: white;
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    list-style-type: none;
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
#vote-button {
    background-color: #ff00fb;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
        Geneva, Verdana, sans-serif;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    width: 60px;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 5px;
    transition: 0.5s;
}
#vote-button:hover {
    border: 2px solid white;
}
#checkbox {
    float: left;
    height: 18px;
    width: 18px;
    margin-top: 9px;
    margin-left: 8px;
    margin-right: -8px;
    background-color: #ff00fb;
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
