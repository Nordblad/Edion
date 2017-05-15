<template>
    <div id="app">
        <!--<div class="columns">
                <div class="column">
                    <router-view></router-view>
                </div>
                <div class="column is-3">
                    <nav-menu params="route: route"></nav-menu>
                </div>
            </div>-->
        <!--<nav-menu params="route: route"></nav-menu>-->
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
import Vue from 'vue'
// import CounterExample from './counter-example'
// import FetchData from './fetch-data'
import HomePage from './home-page'
import NavMenu from './nav-menu'

// Vue.component('counter-example', CounterExample);
// Vue.component('fetch-data', FetchData);
Vue.component('home-page', HomePage);
Vue.component('nav-menu', NavMenu);

export default {
    data() {
        return {
        }
    }
}
</script>

<style>

</style>