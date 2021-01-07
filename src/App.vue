<template>
    <div>
        <h1 id="title">Etkot Kalenteri</h1>
        <div id="new-button">
            <p id="button-text">NEW</p>
        </div>
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

export default {
    name: 'App',
    components: {
        Event
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
    color: #f700ff;
    font-family: 'NSimSun';
    text-decoration: underline;
    font-size: 340%;
    padding: 45px;
}
#new-button {
    background-color: #f700ff;
    border-radius: 10px;
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
