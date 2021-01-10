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
                <form id="form" @submit="checkForm" >
                    <p v-if="errors.length">
                        <ul id="error">
                            <li v-for="(error, index) in errors" :key="`error-${index}`">{{ error }}</li>
                        </ul>
                    </p>
                    <input
                        id="input"
                        v-model="name"
                        type="text"
                        placeholder="Name:"
                        autocomplete="off"
                    />
                    <input
                        id="input"
                        v-model="date"
                        type="date"
                        placeholder="Date:"
                        autocomplete="off"
                    />
                    <select id="input" v-model="time" name="time" autocomplete="off">
                        <option value="" selected disabled >Select vote time (hr):</option>
                        <option v-for="(option, index) in timeOptions" :key="`error-${index}`">{{ option }}</option>
                    </select>
                    <p>
                        <input id="send-button" type="submit" value="Send" />
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'New',
    data() {
        return {
            newOpen: false,
            name: null,
            date: null,
            time: null,
            timeOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10],
            errors: []
        }
    },
    methods: {
        newPressed() {
            this.newOpen = !this.newOpen
        },
        checkForm(e) {
            if (this.name && this.date && this.time) {
                console.log('Tallessa on, tallessa on')
                this.newOpen = false
                return true
            }
            this.errors = []

            if (!this.name) {
                this.errors.push('-Name required-')
            }
            if (!this.date) {
                this.errors.push('-Date required-')
            }
            if (!this.time) {
                this.errors.push('-Vote time required-')
            }
            setTimeout(() => {
                this.errors = []
            }, 2000)
            
            e.preventDefault()
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 
        Geneva, Verdana, sans-serif;
}
#new-button {
    background-color:#02f0a5;
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
    font-size: 25px;
    padding: 6px;
    cursor: pointer;
}
#error {
    color: white;
    text-align: center;
    list-style-type: none;
}
#send-button {
    background-color: white;
    border-radius: 8px;
    width: 100px;
    height: 45px;
    margin: auto;
    margin-top: 30px;
    display: block;
    border: none;
    font-size: 20px;
}
#send-button:hover {
    border: 2px solid black;
}
#send-button:focus {
    outline: none;
    box-shadow: none;
}
#new-menu {
    background-color: #02f0a5;
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
    width: 60%;
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
