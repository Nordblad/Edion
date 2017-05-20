<template>
  <div class="page-editor">
    <ed-topbar :selectedPageId="id" @newPageCreated="getPages" @click.native="deselectRow()" @addRowButtonClicked="rowPickerOpen = true" :hasLoadedRows="hasLoadedRows">
      <language-tabs slot="center" />
    </ed-topbar>
    <div style="height: 52px"></div>
  
    <!--<div class="notification is-info" v-if="numberOfRows == 0 && !rowsLoading && !dismissStarterNotification" style="position: absolute; left: 10px; top: 62px;">
                                                        <button class="delete" @click="dismissStarterNotification = true"></button>
                                                        Press the "new row" button in the top menu to add content.
                                                      </div>-->
  
    <div class="ed-page" :data-page-id="id">
  
      <component v-for="row in $store.state.rows" :is="row.type" :rowId="row.rowId"></component>
  
    </div>
    <div class="is-overlay" style="background-color: rgba(1, 1, 1, .5)" v-if="rowsLoading">LOADING!</div>
  
    <div class="ed-rowwindow">
      <div class="section is-transparent">
        <div class="columns is-min-height-100">
          <div class="column is-3-tablet is-fixed-tablet">
            <!--<div class="box is-paddingless">
                              <div class="field has-addons">
                                <p class="control is-expanded">
                                  <button class="button">
                                    <span>Upload</span>
                                  </button>
                                </p>
                                <p class="control">
                                  <button class="button">
                                    <span class="icon">
                                      <i class="fa fa-star"></i>
                                    </span>
                                  </button>
                                </p>
                                <p class="control">
                                  <button class="button">
                                    <span class="icon">
                                      <i class="fa fa-linkedin"></i>
                                    </span>
                                  </button>
                                </p>
                                <p class="control">
                                  <button class="button">
                                    <span class="icon">
                                      <i class="fa fa-plane"></i>
                                    </span>
                                  </button>
                                </p>
                                <p class="control">
                                  <button class="button">
                                    <span class="icon">
                                      <i class="fa fa-image"></i>
                                    </span>
                                  </button>
                                </p>
                              </div>
                            </div>-->
            <div class="box">
              <div class="field">
                <p class="control">
                  <button class="button is-success is-fullwidth">
                    <span class="icon">
                      <i class="fa fa-upload"></i>
                    </span>
                    <span>Upload images</span>
                  </button>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <label class="checkbox">
                    <input type="checkbox" v-model="showImageNames">Show file names
                  </label>
                </p>
              </div>
              <aside class="menu">
                <p class="menu-label">
                  General
                </p>
                <ul class="menu-list">
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a>Customers</a>
                  </li>
                </ul>
                <p class="menu-label">
                  Administration
                </p>
                <ul class="menu-list">
                  <li>
                    <a>Team Settings</a>
                  </li>
                  <li>
                    <a class="is-active">Manage Your Team</a>
                    <ul>
                      <li>
                        <a>Members</a>
                      </li>
                      <li>
                        <a>Plugins</a>
                      </li>
                      <li>
                        <a>Add a member</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Invitations</a>
                  </li>
                  <li>
                    <a>Cloud Storage Environment Settings</a>
                  </li>
                  <li>
                    <a>Authentication</a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div class="column is-9-tablet is-offset-3-tablet">
            <div class="columns is-multiline">
              <div class="column is-6-tablet is-4-desktop is-2-fullhd" v-for="i in sortedImages">
                <div :class="['ed-img-thumb', i.selected ? 'ed-selected' :'', i.deleted ? 'ed-deleted' : '']" @click="i.selected = !i.selected">
                  <figure class="image is-4by3">
                    <img :src="i.url" />
                  </figure>
                  <a class="delete is-medium" @click.stop="i.deleted = true"></a>
                  <div class="ed-img-desc" v-if="showImageNames">
                    <span>{{ i.fileName }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!--<div class="ed-rowwindow-background"></div>-->
      <div class="ed-rowwindow-content" style="display:none">
        <div class="ed-rowwindow-menu columns section is-transparent">
          <div class="column is-3-tablet">
            <div class="box is-info">
              Stuff
            </div>
            <div class="box">
              <aside class="menu">
                <p class="menu-label">
                  General
                </p>
                <ul class="menu-list">
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a>Customers</a>
                  </li>
                </ul>
                <p class="menu-label">
                  Administration
                </p>
                <ul class="menu-list">
                  <li>
                    <a>Team Settings</a>
                  </li>
                  <li>
                    <a class="is-active">Manage Your Team</a>
                    <ul>
                      <li>
                        <a>Members</a>
                      </li>
                      <li>
                        <a>Plugins</a>
                      </li>
                      <li>
                        <a>Add a member</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Invitations</a>
                  </li>
                  <li>
                    <a>Cloud Storage Environment Settings</a>
                  </li>
                  <li>
                    <a>Authentication</a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
        <!--<div class="section is-transparent is-min-height-100">
                      <div class="columns">
                        <div class="column is-offset-3-tablet">
                          <div class="columns is-multiline">
                            <div class="column is-4-tablet has-text-centered" v-for="i in imagelist">
                              <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img :src="i.url" />
                                  </figure>
                                </div>
                                <div class="card-content is-unpadded">
                                  Real good on paper
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>-->
      </div>
    </div>
  
    <transition name="modal-fade">
      <row-picker v-show="rowPickerOpen" @ok="addNewRow" @cancel="rowPickerOpen = false"></row-picker>
    </transition>
  </div>
</template>

<script>
import EdTopbar from 'components/ed-topbar'
import LanguageTabs from 'components/language-tabs'
import Rows from '../rows'

import RowSimple from 'components/rows/row-simple'
import RowBlocks from 'components/rows/row-blocks'
import RowHeader from 'components/rows/row-header'
import RowImages from 'components/rows/row-images'
import RowFooter from 'components/rows/row-footer'
import RowBar from 'components/rows/row-bar'

import Languages from '../languages'
import RowPicker from 'components/row-picker'
import EdRowBase from 'components/rows/ed-row-base'


export default {
  name: 'edion-ui',
  components: {
    EdTopbar,
    LanguageTabs,
    RowSimple,
    RowBlocks,
    RowHeader,
    RowImages,
    RowFooter,
    RowBar,
    RowPicker,
    EdRowBase
  },
  props: ['id', 'languageCode'],
  data() {
    return {
      newRowIdCounter: -1,
      pagesLoading: false,
      rowsLoading: false,
      rowPickerOpen: false,
      hasLoadedRows: false,
      selectedImage: null,
      images: this.createImageList(),
      showImageNames: false
    }
  },
  computed: {
    languageId() {
      return this.$store.state.languageId;
    },
    rows() {
      return this.$store.state.rows;
    },
    sortedImages() {
      return this.images.filter((i, v) => {
        //console.log('sorter:', i, v);
        return !i.deleted
      })
    }
  },
  created() {
    this.getPages();
    this.fetchRows();
    this.$store.commit("CHANGE_LANGUAGE", this.$route.params.languageCode);
  },
  methods: {
    createImageList() {
      var list = [];
      // bara sort och sånt här
      for (var i = 0; i < 25; i++) {
        var n = this.getRandomImage();
        list.push({
          sortOrder: i,
          url: '/dist/img/example' + n + '.jpg',
          fileName: n + '.jpg',
          selected: false,
          deleted: false
        });
      }
      return list;
    },
    getRandomImage() {
      var a = Math.floor(Math.random() * 10) + 1;
      return a;
    },
    addNewRow(type) {
      this.rowPickerOpen = false;
      console.log('ADD NEW ROW', type);

      var row = {
        pageId: this.id,
        rowId: this.newRowIdCounter,
        type: type,
        fields: {},
        sortOrder: this.$store.getters.numberOfRows
      }
      this.newRowIdCounter--;
      this.$store.commit('ADD_ROW', row)
    },
    print(m) {
      console.log(m);
    },
    getPages: function () {
      this.$store.dispatch('FETCH_PAGES');
    },
    fetchRows: function () {
      var self = this;
      this.rowsLoading = true;
      this.$store.dispatch('FETCH_ROWS', this.id).then(() => { self.rowsLoading = false; this.hasLoadedRows = true });
    },
    // openRowPicker: function () {
    //   console.log('Open row picker!', this.newRowIdCounter);
    //   var row = {
    //     pageId: this.id,
    //     rowId: this.newRowIdCounter,
    //     //type: 'row-simple',
    //     type: 'row-blocks',
    //     fields: {},
    //     sortOrder: this.$store.getters.numberOfRows
    //   }
    //   this.newRowIdCounter--;
    //   this.$store.commit('ADD_ROW', row)
    //   //this.$store.commit('SELECT_ROW', row.rowId);
    // },
    deselectRow() {
      //this.$store.commit('SELECT_ROW', 0);
    }
  },
  watch: {
    '$route.params.id': function () {
      console.log('ID CHANGED!');
      this.hasLoadedRows = false;
      this.fetchRows();
    },
    '$route.params.languageCode': function (val) {
      this.$store.commit("CHANGE_LANGUAGE", val);
    }
  }
}
</script>

<style>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all .2s ease-in-out;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

body,
body.has-no-overflow {
  overflow: hidden;
  height: 100vh;
}

.section.is-transparent {
  background-color: transparent;
}

.container.is-min-height-100,
.section.is-min-height-100 {
  min-height: 100%;
}

.ed-rowwindow {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 1, 1, .85);
  z-index: 9000;
  overflow: auto;
}

.ed-rowwindow-content {
  min-height: 100%;
}

.ed-rowwindow-menu {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}

.ed-img-thumb {
  /*border: 3px solid transparent;*/
  padding: 3px;
  transition: all 0.12s ease-out;
  box-shadow: 0 0 2px rgba(1, 1, 1, 0.4);
  position: relative;
  background-color: rgba(0, 0, 0, 0.15);
  color: white;
  border-radius: 4px;
}

.ed-img-thumb .delete {
  position: absolute;
  right: 5px;
  top: 5px;
}

.ed-img-thumb:not(:hover) .delete {
  display: none;
}

.ed-img-thumb .delete:hover {
  background-color: darkred;
}

.ed-img-thumb:hover {
  /*transform: scale(1.03, 1.03);*/
  /*transform: translateY(-4px);*/
  /*border-color: #b1b1b1;*/
  background-color: rgba(1, 1, 1, .9);
  transition: all 0.12s ease-out;
  box-shadow: 0 0 20px rgba(1, 1, 1, 0.4)
}

.ed-img-thumb.ed-selected {
  transform: scale(1.03, 1.03);
  /*box-shadow: 0 0 0 3px #fbfbfb;*/
  /*border-color: #fbfbfb;*/
  background-color: white;
  color: black;
}

.ed-img-desc {
  /*background-color: white;*/
  /*border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;*/
  padding: 0.3rem 0.6rem;
}

@media screen and (min-width: 769px) {
  .is-fixed-tablet {
    position: fixed;
  }
}

.filename-transition-enter-active {
  transition: all 1s ease;
}

.filename-transition-leave-active {
  transition: all 1s ease;
}

.filename-transition-enter,
.filename-transition-leave-to {
  /*opacity: 0;*/
  transform: translateY(-100%);
  max-height: 0;
  /*transform-origin: 0, 0;*/
  /*overflow: hidden;*/
}
</style>