<template>
    <!--<div class="row-picker">
                                                                            <div class="container">
                                                                                <div class="box">Hej</div>
                                                                            </div>
                                                                        </div>-->
    <div class="modal is-active ed-rowpicker">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box is-unpadded" style="background-color: transparent">
                <div class="columns">
                    <div class="column is-3">
                        <div class="box">
                            <div class="field has-addons">
                                <p class="control">
                                    <input class="input" type="text" placeholder="Search rows">
                                </p>
                                <p class="control">
                                    <a class="button is-info">
                                        <span class="icon is-small">
                                            <i class="fa fa-search"></i>
                                        </span>
                                    </a>
                                </p>
                            </div>
                            <aside class="menu">
                                <p class="menu-label">
                                    Page sections
                                </p>
                                <ul class="menu-list">
                                    <li>
                                        <a>Headers
                                            <span class="tag is-small is-light is-pulled-right">
                                                New!
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Navigation</a>
                                    </li>
                                    <li>
                                        <a>Footers</a>
                                    </li>
                                </ul>
                                <p class="menu-label">
                                    Content blocks
                                </p>
                                <ul class="menu-list">
                                    <li>
                                        <a class="is-active">Text</a>
                                    </li>
                                    <li>
                                        <a>Images</a>
                                        <ul>
                                            <li>
                                                <a>Slideshows</a>
                                            </li>
                                            <li>
                                                <a>Galleries</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>Profiles</a>
                                    </li>
                                </ul>
                                <p class="menu-label">
                                    Misc
                                </p>
                                <ul class="menu-list">
                                    <li>
                                        <a>Maps</a>
                                    </li>
                                    <li>
                                        <a>Videos</a>
                                    </li>
                                    <li>
                                        <a>Social feeds</a>
                                    </li>
                                    <li>
                                        <a>
                                            <!--<span class="icon is-small">
                                                                <i class="fa fa-star"></i>
                                                            </span>-->
                                            Favorites
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div class="column">
                        <div class="ed-imagepicker-options">
                            <div class="box ed-rowpicker-option" v-for="row in rows" @click="pickRow(row)">
                                <div class="row-thumbnail-placeholder">
                                    <div>
                                        [PREVIEW IMAGE]
                                    </div>
                                </div>
                                <h1 class="title ">{{ row.type }}</h1>
                                <h2 class="subtitle ">{{ row.description }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close" @click="cancel"></button>
    </div>
</template>

<script>
import Rows from '../rows'

export default {
  name: 'row-picker',
  data () {
    return {
      rows: Rows,
      show: false
    }
  },
  methods: {
      cancel() {
          this.$emit('cancel');
      },
      pickRow(row) {
          this.$emit('ok', row.type)
      }
  }
}
</script>

<style>
.row-thumbnail-placeholder {
    height: 180px;
    background-color: #dcdcdc;
    color: #BBB;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1px 1px 0 rgba(1, 1, 1, .35);
}

@media screen and (min-width: 1024px) {
    .ed-rowpicker .modal-content {
        width: 1024px;
    }
}

.ed-rowpicker-option {
    cursor: pointer;
    box-shadow: inset 0 0 0px 0px #bbbbbb;
    transition: box-shadow 0.1s ease-in-out;
}

.ed-rowpicker-option:hover {
    /*background-color: #FFF;*/
    box-shadow: inset 0 0 0px 3px #bbbbbb;
    transition: box-shadow 0.2s ease-in-out;
    /*box-shadow: 0 0 10px red;*/
    /*box-shadow: 1px 1px 10px 5px rgba(1, 1, 1, .1);
    -webkit-transition: box-shadow 0.3s ease-in-out;
    -moz-transition: box-shadow 0.3s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;*/
}

.row-picker {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: rgba(1, 1, 1, .4);
    z-index: 7800;
    padding: 3rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
</style>