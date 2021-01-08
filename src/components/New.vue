<template>
    <div>
        <div v-if="!newOpen">
            <div id="new-button" v-on:click="newPressed">
                <p id="button-text">NEW</p>
            </div>
        </div>
        <div v-else>
            <div id="new-menu">
                <p id="button-text" v-on:click="newPressed">NEW</p>
                <input
                    id="input"
                    type="text"
                    placeholder="Name:"
                    autocomplete="off"
                />
                <input
                    id="input"
                    type="date"
                    placeholder="Date:"
                    autocomplete="off"
                />
                <div id="send-button" v-on:click="sendPressed">
                    <p id="button-text" :style="{ color: 'black' }">Send</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'New',
    data() {
        return {
            newOpen: false
        }
    },
    methods: {
        newPressed() {
            this.newOpen = !this.newOpen
        },
        sendPressed() {
            this.newOpen = false
        }
    }
}
</script>

<style scoped>
#new-button {
    background-color: #ff00fb;
    border-radius: 8px;
    width: 100px;
    height: 45px;
    margin: 50px;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.5s;
}
#new-button:hover {
    width: 125px;
    height: 52px;
    margin: 48px;
}
#button-text {
    text-align: center;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif1;
    font-size: 25px;
    padding: 6px;
    cursor: pointer;
}
#send-button {
    background-color: white;
    border-radius: 8px;
    width: 120px;
    height: 50px;
    margin: auto;
    margin-top: 30px;
    display: block;
}
#send-button:hover {
    border: 2px solid black;
}
#new-menu {
    background-color: #ff00fb;
    width: 30%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: -5px 0px 15px #181818;
    transition: 0.5s;
}
#input {
    width: 50%;
    padding: 12px 20px;
    margin: auto;
    margin-top: 30px;
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
    border: none;
    outline: none;
    transition: 0.25s ease-out;
}
#input:focus {
    border: none;
    width: 70%;
    transition: 0.25s ease-in;
}
@media only screen and (max-width: 1100px) {
    #new-menu {
        width: 50%;
    }
}
@media only screen and (max-width: 680px) {
    #new-menu {
        width: 100%;
    }
}
</style>
