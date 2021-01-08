<template>
    <div>
        <h1 id="title">Etkot Kalenteri</h1>
        <New />
        <div id="container">
            <Event title="Pikkujoulusauna" />
            <Event title="Pajailta" />
            <Event title="Etkot-Kyykkä" />
            <Event title="Pietarin reissu" />
            <Event title="Minuuttipeli" />
            <Event title="Keilausiltama" />
            <Event title="Kaljagolf" />
            <Event title="Random ryybs ilta" />
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
