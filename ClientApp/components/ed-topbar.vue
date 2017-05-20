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
                            <select @change="navigateToPage" style="min-width: 170px">
                                <option v-for="page in $store.state.pages" :value="page.pageId" :selected="selectedPageId == page.pageId">{{ page.name }}</option>
                            </select>
                        </span>
                    </p>
                    <p class="control">
                        <a class="button is-outlined" @click="newPage">
                            <span class="icon">
                                <i class="fa fa-plus"></i>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
            <div class="nav-item">
                <div class="field">
                    <p class="control">
                        <a class="button is-outlined">
                            <span class="icon">
                                <i class="fa fa-pencil"></i>
                            </span>
                            <!--<span>Styles</span>-->
                        </a>
                    </p>
                </div>
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
    
        <div class="nav-right">
            <div class="nav-item">
                <div class="field">
                    <div class="control">
                        <button :class="['button', $store.getters.numberOfRows == 0 ? 'is-highlighted' : '', 'is-outlined']" @click="$emit('addRowButtonClicked')">
                            <span class="icon">
                                <i class="fa fa-plus-circle"></i>
                            </span>
                            <span>New row</span>
                        </button>
                        <transition name="fade-quick">
                            <div class="notification is-info has-arrow" v-show="hasLoadedRows && $store.getters.numberOfRows == 0 && !dismissStarterNotification" style="position: absolute; left: -120px; right: -120px; top: calc(100% + 20px);">
                                <button class="delete is-small" @click="dismissStarterNotification = true"></button>
                                Start by choosing a new row to add.
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
    
            <!-- TIP TO ADD ROW -->
    
            <!-- HISTORY DROP DOWN -->
            <transition name="fade-quick">
                <div class="card has-arrow ed-history-window" v-show="showHistoryWindow">
                    <div class="card-content">
                        <table class="table is-narrow is-striped ed-history-table">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Action</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="change in $store.state.history">
                                    <td>{{ change.time.toTimeString().substring(0, 8) }}</td>
                                    <td>{{ change.text }}</td>
                                    <td>{{ change.details }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </transition>
            <div class="nav-item">
                <div class="field">
                    <p class="control">
                        <button :class="{ 'button': true, 'is-outlined': true, 'is-dark': showHistoryWindow }" :disabled="$store.state.history.length == 0" @click="showHistoryWindow = !showHistoryWindow">
                            <span class="icon">
                                <i class="fa fa-history"></i>
                            </span>
                        </button>
                    </p>
                </div>
            </div>
            <div class="nav-item">
                <div class="field has-addons">
                    <p class="control">
                        <button class="button is-outlined">
                            <span class="icon">
                                <i class="fa fa-undo"></i>
                            </span>
                        </button>
                    </p>
                    <p class="control">
                        <button class="button is-outlined is-disabled" disabled>
                            <span class="icon">
                                <i class="fa fa-repeat"></i>
                            </span>
                        </button>
                    </p>
                </div>
            </div>
            <div class="nav-item">
                <div class="field">
                    <p class="control">
                        <a :class="{ button: true, 'is-primary': true, 'is-outlined': !canSave, 'is-loading': isSaving }" :disabled="!canSave" @click="save">
                            <!--<span class="icon">
                                                                                        <i class="fa fa-save"></i>
                                                                                    </span>-->
                            <span>Save</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    
        <div v-if="isSaving" style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; background-color: rgba(255, 255, 255, .4); z-index: 2"></div>
    
    </nav>
</template>

<script>
import { routes } from '../routes'
import EdModal from './ed-modal'

export default {
    components: {
        EdModal
    },
    props: { 
        selectedPageId: { },
        hasLoadedRows: { default: false }
    },
    data() {
        return {
            routes,
            pageModalOpen: false,
            newPageName: 'New page',
            selectedPage: null,
            select: null,
            isSaving: false,
            showHistoryWindow: false,
            dismissStarterNotification: false
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

.card.has-arrow::before {
    position: absolute;
    top: -27px;
    right: 187px;
    border: 14px solid transparent;
    border-bottom-color: white;
    content: ''
}

.ed-history-window {
    position: fixed;
    top: 60px;
    right: 10px;
    width: 480px;
    max-height: calc(100vh - 80px);
    font-size: 0.8rem;
}
.ed-history-window .card-content {
    padding: 0.5rem;
}
.ed-history-window .table {
    margin: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s transform 0.1s ease
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
    opacity: 0;
    transform: translateY(4px)
}



/*.button.is-highlighted {
    box-shadow: 1px 1px 8px 0px rgba(97, 97, 97, 0.47)
}*/

.fade-quick-enter-active,
.fade-quick-leave-active {
    transition: all .2s ease-in-out;
}

.fade-quick-enter,
.fade-quick-leave-to {
    opacity: 0;
    transform: translateY(3px);
}




/*.box.box.has-arrow::after {
    border-bottom-color: green;
    top: -34px;
}*/
</style>