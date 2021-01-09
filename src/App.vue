<template>
    <div>
        <h1 id="title">Etkot Kalenteri</h1>
        <New />
        <div id="container">
            <Event v-bind:title="'Pikkujoulusauna'" v-bind:dates="dates" />
            <Event v-bind:title="'Pajailta'" v-bind:dates="dates" />
            <Event title="Etkot-Kyykkä" v-bind:dates="dates" />
            <Event title="Pietarin reissu" v-bind:dates="dates" />
            <Event title="Minuuttipeli" v-bind:dates="dates" />
            <Event title="Keilausiltama" v-bind:dates="dates" />
            <Event title="Kaljagolf" v-bind:dates="dates" />
            <Event title="Random ryybs ilta" v-bind:dates="dates" />
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
        New
    },
    data() {
        return {
            dates: ['1.4.2021', '28.6.2021', '31.10.2030']
        }
    }
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
