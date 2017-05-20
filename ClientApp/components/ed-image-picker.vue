<template>
    <div class="ed-rowwindow">
        <div class="section is-transparent">
            <div class="columns is-min-height-100">
                <div class="column is-narrow-tablet">
                    <div class="is-menu-width-tablet"></div>
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
                    <div class="box is-fixed-tablet is-menu-width-tablet">
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
                            <p class="control has-icon has-icon-right">
                                <input class="input" type="text" placeholder="Search images" v-model="searchTerm" />
                                <span class="icon is-right">
                                    <i class="fa fa-search"></i>
                                </span>
                            </p>
                        </div>
    
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select v-model="imageSort.key">
                                        <option value="fileName">Sort by name</option>
                                        <option value="id">Sort by id</option>
                                        <option>sort by size</option>
                                    </select>
                                </div>
                            </div>
                            <p class="control">
                                <button class="button" @click="imageSort.order = -imageSort.order">
                                    <span class="icon is-small">
                                        <i :class="['fa', imageSort.order > 0 ? 'fa-sort-amount-asc' : 'fa-sort-amount-desc']"></i>
                                    </span>
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
                                Folders
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <a>{{ selectionIsValid ? 'VALID' : 'INVALID' }}</a>
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
                        <div :class="['notification', selectionIsValid ? 'is-success' : 'is-danger']">
                            VALID?
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-multiline">
                        <div class="column is-6-tablet is-4-desktop" v-for="i in filteredImages">
                            <div :class="['ed-img-thumb', i.selected ? 'ed-selected' :'', i.deleted ? 'ed-deleted' : '']" @click="selectImage(i)">
                                <figure class="image is-4by3">
                                    <img :src="i.url" />
                                </figure>
                                <a class="delete is-medium" v-show="!i.deleted" @click.stop="i.deleted = true; selectImage(i, true)"></a>
                                <div class="ed-img-desc" v-if="showImageNames">
                                    <span>{{ i.fileName }}</span>
                                    <span class="is-pulled-right">{{ i.id }}</span>
                                </div>
                                <div class="ed-deleted-overlay is-overlay" v-if="i.deleted">
                                    <span class="icon is-large delete-icon">
                                        <i class="fa fa-trash-o"></i>
                                    </span>
                                    <!--<button class="button is-inverted is-outlined is-danger">
                                                                        <span class="icon">
                                                                            <i class="fa fa-undo"></i>
                                                                        </span>
                                                                        <span>Undo</span>
                                                                    </button>-->
                                    <!--<p class="control">
                                                                        <label class="checkbox">
                                                                            <input type="checkbox" checked> Delete
                                                                        </label>
                                                                    </p>-->
                                    <!--<button class="button is-outlined is-danger">
                                                                    <span>Delete</span>
                                                                    <span class="icon">
                                                                        <i class="fa fa-check-square"></i>
                                                                    </span>
                                                                </button>-->
                                    <div class="undo" @click.stop="i.deleted = false">
                                        <!--<span class="undo-description">Undo delete</span>-->
                                        <span class="icon">
                                            <i class="fa fa-undo"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ed-big-imagepicker',
  props: {
    show: {
        type: Boolean,
        default: false
    }
  },
  data () {
    return {
      selectedImage: null,
      images: this.createImageList(),
      showImageNames: true,
      imageSort: { key: 'fileName', order: 1 },
      searchTerm: null,
      selectedImages: [],
      selectMin: 1,
      selectMax: 1
    }
  },
  watch: {
    show: function(val) {
        console.log('show changed!', val);
    }
  },
  mounted() {
    this.toggleBodyClass(true);
  },
  methods: {
      showNotification(message, time) {
        console.log('NOTIFICATION: ' + message);
      },
      toggleBodyClass(toggle) {
          document.body.classList.add('has-overflow-hidden');
        // var el = document.querySelectorAll('body');
        // if (el.classList)
        // el.classList.add(className);
        // else
        // el.className += ' ' + className;
      },
      selectImage(i, deselect) {
          console.log('Select image..', i)
          if (deselect) {
            if (i.selected) {
                i.selected = false;
                this.selectedImages = this.selectedImages.filter(v => v.id != i.id)
            }
        }
        if (i.deleted) {
            return;
        }
        else {
            if (i.selected) {
                i.selected = false;
                this.selectedImages = this.selectedImages.filter(v => v.id != i.id)
                //this.selectedImages--;
            } else {
                if (this.selectedImages.length === this.selectMax) {
                    if (this.selectMax === 1) {
                        this.selectedImages[0].selected = false;
                        i.selected = true;
                        this.selectedImages = [i];
                        return;
                    }
                    this.showNotification('You can select at most ' + this.selectMax + ' images,', 2000);
                    return;
                }
                i.selected = true;
                this.selectedImages.push(i);
                //this.selectedImages++
            }
            //this.selectedImages.push(i);
        }
      },
    createImageList() {
      var list = [];
      // bara sort och sånt här
      let generateRandomName = () => {
        let letters = 'abcdefghijklmnopqrstuvwxyz123456789'.split('');
        let name = [];
        for (var i = 0; i < 5; i++) {
          var rand = Math.floor(Math.random() * letters.length);
          name.push(letters[rand]);
        }
        return name.join('');
      }
      for (var i = 0; i < 25; i++) {
        var n = this.getRandomImage();
        list.push({
          id: i,
          url: '/dist/img/example' + n + '.jpg',
          fileName: generateRandomName() + '.jpg',
          selected: false,
          deleted: false,
        });
      }
      return list;
    },
    getRandomImage() {
      var a = Math.floor(Math.random() * 10) + 1;
      return a;
    },
  },
  computed: {
      selectionIsValid() {
        return this.selectedImages.length >= this.selectMin && this.selectedImages.length <= this.selectMax;
      },
    sortedImages() {
        console.log('Sorting!')
      let order = this.imageSort.order; // 1 for asc, -1 for desc
      if (this.imageSort.key == 'id') {
        return this.images.sort((a, b) => {
          if (a.id < b.id) {
            return -order;
          }
          if (a.id > b.id) {
            return order;
          }
          return 0;
        });
      }
      else if (this.imageSort.key == 'fileName') {
        return this.images.sort((a, b) => {
          var nameA = a.fileName.toUpperCase(); // ignore upper and lowercase
          var nameB = b.fileName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -order;
          }
          if (nameA > nameB) {
            return order;
          }
          return 0;
        });
      }
    },
    filteredImages() {
        console.log('Filtering!', this.searchTerm)
        if (!this.searchTerm || this.searchTerm === '') {
            return this.sortedImages;
        }
        return this.sortedImages.filter((img) => {
            return img.fileName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > 0
        });
    },
    imageList() {
        // ääh
    }
  }
}
</script>

<style>
body.has-overflow-hidden {
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
    box-shadow: 1px 1px 2px rgba(1, 1, 1, 0.4);
    position: relative;
    /*background-color: rgba(0, 0, 0, 0.15);*/
    background-color: #171717;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.ed-img-thumb .delete {
    position: absolute;
    right: 8px;
    top: 8px;
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
    /*background-color: rgba(1, 1, 1, .9);*/
    background-color: #313131;
    transition: all 0.12s ease-out;
    box-shadow: 1px 1px 20px rgba(1, 1, 1, 0.4)
}

.ed-img-thumb.ed-selected {
    transform: scale(1.03, 1.03);
    /*box-shadow: 0 0 0 3px #fbfbfb;*/
    /*border-color: #fbfbfb;*/
    background-color: white;
    color: black;
}

.ed-img-thumb.ed-deleted {
    transform: scale(0.8);
    box-shadow: none;
    background-color: transparent;
    cursor: default;
}

.ed-img-desc {
    padding: 0.3rem 0.6rem;
}

@media screen and (min-width: 769px) {
    .is-fixed-tablet {
        position: fixed;
    }
    .is-menu-width-tablet {
        width: 250px;
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

.ed-deleted-overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background-color: rgba(1, 1, 1, 0.7);
}

.ed-deleted-overlay .delete-icon {
    /*color: #ccc;*/
    text-shadow: 2px 2px 0 black
}

.ed-deleted-overlay .undo {
    padding: 6px;
    position: absolute;
    right: 8px;
    top: 8px;
    border-radius: 50%;
    cursor: pointer;
}

.ed-deleted-overlay .undo:hover {
    background-color: darkgreen;
}
</style>