<template>
    <div id="box" :style="{ 'max-height': cardOpen ? '500px' : '110px' }">
        <p id="name">{{ title }}</p>
        <div v-if="!voteActive">
            <p id="info">{{ setDate }}</p>
        </div>
        <div v-else>
            <div v-if="setDate && !cardOpen">
                <p id="info">{{ setDate }}</p>
            </div>
            <div v-if="!cardOpen" id="button" v-on:click="infoPressed">
                <p id="plus">+</p>
            </div>
            <div v-else>
                <div v-if="voteDates.length">
                    <ul id="info">
                        <li v-for="(date, index) in voteDates" :key="`error-${index}`">
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
    </div>
</template>

<script>
//Event cards are a bit less broken atm

export default {
    name: 'Event',
    props: {
        title: String,
        setDate: String,
        voteDates: Array,
        voteActive: Boolean
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
    background-color: #000a08;
    height: max-content;
    width: 600px;
    align-self: center;
    padding: 30px;
    padding-bottom: 15px;
    margin: 15px;
    border-radius: 25px;
    border-style: solid;
    border: 1px solid #02f0a5;
    box-shadow: 0 0 5px #02f0a5;
    transition: 0.75s ease-out;
    transition: padding-bottom 0.25s ease-out;
    overflow: hidden;
}
#box:hover {
    padding-bottom: 20px;
}
#name {
    color: white;
    font-size: 30px;
    font-family: 'Lato';
    text-align: center;
    margin-bottom: 5px;
}
#info {
    color: white;
    font-size: 25px;
    font-family: 'Lato';
    text-align: center;
    list-style-type: none;
}
#button {
    background-color: #03c285;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    margin: auto;
    margin-top: 10px;
    transition: 0.5s;
}
#button:hover {
    background-color: #02f0a5;
    box-shadow: 0 0px 15px #03c286;
    opacity: 1;
}
#vote-button {
    background-color: #03c285;
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
    box-shadow: 0 0px 25px #03c28566;
    opacity: 1;
}
#checkbox {
    appearance: none;
    float: left;
    height: 22px;
    width: 22px;
    margin-top: 9px;
    margin-left: 150px;
    margin-right: -260px;
    background-color: #03c285;
    border-radius: 4px;
    outline: none;
    transition: 0.5s;
}
#checkbox:checked::after {
    content: '\2714';
    font-size: 18px;
    color: white;
    margin: 4px;
}
#checkbox:hover {
    border: 1px solid #03c285;
    box-shadow: 0 5px 25px #03c28566;
    opacity: 1;
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
@media only screen and (max-width: 1100px) {
    #box {
        width: 50%;
    }
    #checkbox {
        margin-left: 10px;
    }
    #checkbox {
        margin-left: auto;
    }
}
@media only screen and (max-width: 680px) {
    #box {
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
    }
}
</style>
