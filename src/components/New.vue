<template>
    <div>
        <div v-if="!newOpen">
            <div id="new-button" v-on:click="buttonPressed">
                <p id="button-text">NEW</p>
            </div>
        </div>
        <div v-else>
            <div id="new-menu">
                <p id="button-text" v-on:click="buttonPressed">NEW</p>
                <input
                    id="input"
                    type="text"
                    v-model="message"
                    placeholder="Name:"
                    autocomplete="off"
                />
                <input
                    id="input"
                    type="text"
                    v-model="message"
                    placeholder="Date:"
                    autocomplete="off"
                />
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
        buttonPressed() {
            this.newOpen = !this.newOpen
        }
    }
}
</script>

<style scoped>
#new-button {
    background-color: #ff00fb;
    border-radius: 8px;
    width: 120px;
    height: 50px;
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
#new-menu {
    background-color: #ff00fb;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.5s;
}
#input {
    width: 15%;
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
    border: 2px solid #1c1c1c;
    width: 20%;
    transition: 0.25s ease-in;
}
</style>
