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
        <!--<div class="nav-left nav-menu">
            <a class="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
            </a>
            <div class="field is-grouped">
                <p class="control">
                    <span class="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </span>
                </p>
                <p class="control">
                    <a class="button is-secondary">
                        <span class="icon">
                            <i class="fa fa-plus"></i>
                        </span>
                        <span>New</span>
                    </a>
                </p>
            </div>
        </div>-->
        <div class="nav-left nav-menu">
            <div class="nav-item">
                <span>Edion</span>
            </div>
                <!--<a class="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
            </a>-->
            <div class="nav-item">
                <div class="field is-grouped">
                    <p class="control">
                        <span class="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </span>
                    </p>
                    <p class="control">
                        <a class="button is-secondary">
                            <span class="icon">
                                <i class="fa fa-plus"></i>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    
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
            <!--<a class="nav-item">
                                <span class="icon">
                            <i class="fa fa-twitter"></i>
                          </span>
                            </a>-->
    
            <!--<div class="field">
                      <p class="control">
                        <span class="select is-small">
                          <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                          </select>
                        </span>
                      </p>
                    </div>-->
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
                    <!--<p class="control">
                              <a class="button" >
                                <span class="icon">
                                  <i class="fa fa-twitter"></i>
                                </span>
                                <span>Tweet</span>
                              </a>
                            </p>-->

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

export default {
    data() {
        return {
            routes
        }
    }
}
</script>

<style>
.ed-nav {
    background-color: #e6e6e6;
}
</style>