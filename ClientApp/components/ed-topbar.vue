<template>
    <nav class="nav has-shadow ed-nav">
        <div class="nav-left">
            <!--<a class="nav-item">
                                            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
                                        </a>-->
            <div class="nav-item">
                <div class="field has-addons">
                    <p class="control">
                        <span class="select">
                            <select @change="navigateToPage" style="min-width: 180px">
                                <option v-for="page in $store.state.pages" :value="page.pageId" :selected="selectedPageId == page.pageId">{{ page.name }}</option>
                            </select>
                        </span>
                    </p>
                    <p class="control">
                        <a class="button is-secondary" @click="newPage">
                            <span class="icon">
                                <i class="fa fa-plus"></i>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    
        <!-- NEW PAGE MODAL -->
        <ed-modal v-if="pageModalOpen" @ok="createPage" @cancel="pageModalOpen = false" okButton="Create page" title="New page">
            <div class="field">
                <label class="label">Page name</label>
                <p class="control">
                    <input class="input" type="text" v-model="newPageName">
                </p>
            </div>
        </ed-modal>
    
        <div class="nav-center">
            <slot name="center"></slot>
        </div>
    
        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <!--<span class="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>-->
    
        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right">
            <div class="nav-item">
                <div class="field">
                    <p class="control">
                        <a :class="{ button: true, 'is-primary': true, 'is-disabled': !canSave, 'is-loading': isSaving }" :disabled="!canSave" @click="save">
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
import EdModal from './ed-modal'

export default {
    components: {
        EdModal
    },
    props: ['selectedPageId'],
    data() {
        return {
            routes,
            pageModalOpen: false,
            newPageName: 'New page',
            selectedPage: null,
            select: null,
            isSaving: false
        }
    },
    computed: {
        canSave: function () {
            return this.$store.state.changedRows.length > 0 || this.$store.state.changedFields.length > 0
        }
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
                    this.$router.push({ name: 'page', params: { id: response.data.id, languageCode: this.$route.params.languageCode } });
                    this.$emit('newPageCreated', 'test');
                })
                .catch((error) => console.log(error))
        },
        navigateToPage: function (e) {
            this.$router.push({ name: 'page', params: { id: e.target.value, languageCode: this.$route.params.languageCode } })
        },
        save: function () {
            this.isSaving = true;
            var self = this;
            // var rows = this.$store.state.changedRows;
            // var fields = this.$store.state.changedFields;
            // console.log('SAVE VM:', { changes: { rows: rows, fields: fields }})
            this.$store.dispatch('SAVE', { changedRows: this.$store.state.changedRows, changedFields: this.$store.state.changedFields }).then(() => self.isSaving = false);
        }
    },
    watch: {
        'selectedPageId': function () { console.log('watch'); }
    }
}
</script>

<style>
.ed-nav {
    background-color: #232323;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
}
</style>