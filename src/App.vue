<template>
    <div>
        <h1 id="title">Etkot Kalenteri</h1>
        <New />
        <div id="container">
            <Event
                v-bind:title="'Huippu bileet'"
                v-bind:setDate="'1.1.2100'"
                v-bind:voteDates="['1.1.2100', '12.12.2100']"
                v-bind:voteActive="true"
            />
            <Event
                v-bind:title="'Kaljagolf'"
                v-bind:setDate="'1.3.2012'"
                v-bind:voteDates="['1.1.2100', '1.3.2012']"
                v-bind:voteActive="false"
            />
            <div v-for="(event, index) in events" :key="`error-${index}`">
                <Event v-bind:title="event" v-bind:voteDates="dates" v-bind:voteActive="true" />
            </div>
        </div>
    </div>
</template>

<script>
import Event from './components/Event'
import New from './components/New'

export default {
    name: 'App',
    components: {
        Event,
        New,
    },
    data() {
        return {
            dates: ['1.4.2021', '28.6.2021', '31.10.2030'],
            events: [
                'Pajailta',
                'Pietarin reissu',
                'Keilausiltama',
                'Etkotkyykkä',
                'Random ryybs extravaganza',
                'Pikkujoulusauna',
                'Minuuttipeli',
            ],
        }
    },
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
body {
    background-color: #1c1c1c;
}
#title {
    color: #ff00fb;
    font-family: 'NSimSun';
    text-decoration: underline;
    font-size: 340%;
    padding: 45px;
}
#container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 70px;
    margin-right: 70px;
    margin-top: 25px;
}
</style>
