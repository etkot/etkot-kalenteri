<template>
    <div id="css-selector">
        <img id="logo" src="./assets/etcalendar.png" alt="Logo" />
        <New />
        <div id="container">
            <Event
                :title="'Huippu bileet'"
                :setDate="'1.1.2100'"
                :voteDates="['1.1.2100', '12.12.2100']"
                :voteActive="true"
            />
            <Event
                :title="'Kaljagolf'"
                :setDate="'1.3.2012'"
                :voteDates="['1.1.2100', '1.3.2012']"
                :voteActive="false"
            />
            <div v-for="(event, index) in events" :key="`error-${index}`">
                <Event :title="event" :voteDates="dates" :voteActive="true" />
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
        New
    },
    data() {
        return {
            dates: ['1.4.2021', '28.6.2021', '31.10.2030'],
            events: ['Etkot-Kyykkä', 'Keilausiltama']
        }
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

#css-selector {
    background: linear-gradient(224deg, #02f0a5, #000000, #000000, #000000, #02f0a5);
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 60s ease infinite;
    -moz-animation: AnimationName 60s ease infinite;
    animation: AnimationName 60s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 60%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 60%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 60%}
    100%{background-position:0% 50%}
}

#logo {
    width: 18%;
    height: 8%;
    display: block;
    margin: auto;
}
#container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 70px;
    margin-right: 70px;
    margin-top: 25px;
}
</style>
