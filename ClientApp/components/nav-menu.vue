<template>
    <!--<div class="main-nav">
                                                <div class="navbar navbar-inverse">
                                                    <div class="navbar-header">
                                                        <button type="button"
                                                                class="navbar-toggle"
                                                                data-toggle="collapse"
                                                                data-target=".navbar-collapse">
                                                            <span class="sr-only">Toggle navigation</span>
                                                            <span class="icon-bar"></span>
                                                            <span class="icon-bar"></span>
                                                            <span class="icon-bar"></span>
                                                        </button>
                                                        <a class="navbar-brand"
                                                           href="/">Vue2Spa</a>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                    <div class="navbar-collapse collapse">
                                                        <ul class="nav navbar-nav">
                                                            <li v-for="route in routes">
                                                                <router-link :to="route.path">
                                                                    <span :class="route.style"></span> {{ route.display }}
                                                                </router-link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>-->
    <nav class="nav has-shadow">
        <div class="nav-left nav-menu">
            <!--<a class="nav-item">
                                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
                            </a>-->
            <div class="nav-item">
                <div class="field is-grouped">
                    <p class="control">
                        <span class="select">
                            <select v-model="selectedPage" @change="test()">
                                <!--<option>Select dropdown</option>
                                            <option>With options</option>-->
                                <option v-for="page in pages" :value="page.pageId">{{ page.name }}</option>
                            </select>
                        </span>
                    </p>
                    <p class="control">
                        <a class="button is-secondary" @click="newPage()">
                            <span class="icon">
                                <i class="fa fa-plus"></i>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    
        <!-- NEW PAGE MODAL -->
        <modal-page v-if="pageModalOpen" @ok="createPage()" @cancel="pageModalOpen = false">
            <div class="field">
                <label class="label">Page name</label>
                <p class="control">
                    <input class="input" type="text" v-model="newPageName">
                </p>
            </div>
        </modal-page>
    
        <div class="nav-center">
            <a class="nav-item is-tab is-active">
                SE
            </a>
            <a class="nav-item is-tab">
                EN
            </a>
            <a class="nav-item is-tab">
                JN
            </a>
        </div>
    
        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
        </span>
    
        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right nav-menu">
            <!--<a class="nav-item">
                                    Home
                                </a>
                                <a class="nav-item">
                                    Documentation
                                </a>
                                <a class="nav-item">
                                    Blog
                                </a>-->
    
            <div class="nav-item">
                <div class="field is-grouped">
                    <p class="control">
                        <a class="button is-primary">
                            <span class="icon">
                                <i class="fa fa-save"></i>
                            </span>
                            <span>Save</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    
    </nav>
</template>

<script>
import { routes } from '../routes'
import ModalPage from './ed-modal'

export default {
    components: {
        ModalPage
    },
    data() {
        return {
            routes,
            pages: [],
            pageModalOpen: false,
            newPageName: 'New page',
            selectedPage: null
        }
    },
    created() {
        this.selectedPage = this.id;
        this.$http
            .get('/api/Page')
            .then(response => {
                console.log('RECIEVED PAGE LIST!', response.data)
                this.pages = response.data;
            })
            .catch((error) => console.log(error))
    },
    methods: {
        newPage: function () {
            this.pageModalOpen = true;
        },
        createPage: function () {
            this.pageModalOpen = false;
            console.log('Creating new page: ' + this.newPageName);
            this.$http
                .post('/api/Page', { name: this.newPageName })
                .then(response => {
                    console.log('RECIEVED:', response.data);
                    this.$router.push({ name: 'page', params: { id: response.data.id, language: 'EN' }})
                })
                .catch((error) => console.log(error))
        },
        test: function (e) {
            console.log('TEST FIRED IN MENU', this.selectedPage);
        }
    }
}
</script>

<style>
.ed-nav {
    background-color: #e6e6e6;
}
</style>