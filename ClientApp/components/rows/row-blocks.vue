<template>
    <ed-row-base backgroundClass="gradient1">
        <div class="tile is-ancestor" slot="container">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical is-4">
                        <article class="tile is-child card">
                            <div class="card-image">
                                <figure class="image is-480x480">
                                    <img src="/dist/img/square480-1.jpg" />
                                </figure>
                            </div>
                            <!--<div class="card-content is-half-padded">
                                    </div>-->
                            <footer class="card-footer">
                                <p class="card-footer-item is-downvote">
                                    <span class="icon is-big">
                                        <i class="fa fa-thumbs-down"></i>
                                    </span>
                                </p>
                                <p class="card-footer-item">
                                    <span>+3321</span>
                                </p>
                                <p class="card-footer-item is-upvote">
                                    <span class="icon is-big">
                                        <i class="fa fa-thumbs-up"></i>
                                    </span>
                                </p>
                            </footer>
                            <!-- Put any content you want -->
                        </article>
                        <article class="tile is-child card">
                            <div class="card-image">
                                <figure class="image is-480x480">
                                    <img src="/dist/img/square480-2.jpg" />
                                </figure>
                            </div>
                            <footer class="card-footer">
                                <p class="card-footer-item is-downvote">
                                    <span class="icon is-big">
                                        <i class="fa fa-thumbs-down"></i>
                                    </span>
                                </p>
                                <p class="card-footer-item">
                                    <span>+213</span>
                                </p>
                                <p class="card-footer-item is-upvote">
                                    <span class="icon is-big">
                                        <i class="fa fa-thumbs-up"></i>
                                    </span>
                                </p>
                            </footer>
                            <!-- Put any content you want -->
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child ed-image-background box">
                            <div class="ed-image-overlay">
                                <div class="content">
                                    <h1 class="title">Titel</h1>
                                </div>
                            </div>
                            <!-- Put any content you want -->
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <!-- Put any content you want -->
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <!-- Put any content you want -->
                </article>
            </div>
        </div>
        <div class="tile is-ancestor" slot="container2">
            <div class="tile is-4 is-vertical is-parent">
                <div class="tile is-child box">
                    <ed-text fieldName="title1" :defaultValue="{ type: 'lorem', words: 2 }" :rowId="rowId" class="title" />
                    <ed-text fieldName="box1" :defaultValue="{ type: 'lorem', words: 30 }" :rowId="rowId" />
                </div>
                <div class="tile is-child box">
                    <ed-text fieldName="title2" :defaultValue="{ type: 'lorem', words: 3 }" :rowId="rowId" class="title" />
                    <ed-text fieldName="box2" :defaultValue="{ type: 'lorem', words: 40 }" :rowId="rowId" />
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <ed-text fieldName="title3" :defaultValue="{ type: 'lorem', words: 4 }" :rowId="rowId" class="title" />
                    <ed-text fieldName="box3" :defaultValue="{ type: 'lorem', words: 200 }" :rowId="rowId" />
                </div>
            </div>
            <div class="tile is-parent is-vertical">
                <div class="tile is-child card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="/dist/img/square2.jpg" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">St Vincent</p>
                                <p class="subtitle is-6">@vinny</p>
                            </div>
                        </div>
    
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a>#responsive</a>
                            <br>
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                </div>
                <div class="tile is-child card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="/dist/img/square1.jpg" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">St Vincent</p>
                                <p class="subtitle is-6">@vinny</p>
                            </div>
                        </div>
    
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a>#responsive</a>
                            <br>
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                </div>
                <div class="tile is-child card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="/dist/img/square3.jpg" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">St Vincent</p>
                                <p class="subtitle is-6">@vinny</p>
                            </div>
                        </div>
    
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a>#stockholm</a>
                            <br>
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                </div>
    
                <div class="tile is-child card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="/dist/img/square4.jpg" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">St Vincent</p>
                                <p class="subtitle is-6">@vinny</p>
                            </div>
                        </div>
    
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a>#nackademin</a>
                            <br>
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ed-row-base>
</template>

<script>
import EdText from '../ed-text'
import EdImage from '../ed-image'
import RowMixin from '../../edion/row-mixin'


export default {
    components: {
        EdText,
        EdImage
    },
    mixins: [RowMixin],
    data() {
        return {
        }
    },
    computed: {

    }
}
</script>

<style>
.ed-row {
    position: relative;
}

.ed-row.selected {
    box-shadow: 0px 0px 18px 3px #d2d2d2;
    z-index: 1;
}

.ed-delete-row {
    position: absolute;
    right: 10px;
    top: 10px;
}

.is-downvote,
.is-upvote {
    cursor: pointer;
}

.is-downvote:hover {
    color: #ea0000;
}

.is-upvote:hover {
    color: darkgreen;
}

.ed-image-background {
    background: url(/dist/img/artsy1.jpg);
    position: relative;
}

.ed-image-overlay {
background-color: rgba(1, 1, 1, 0.64);
    position: absolute;
    /*left: 2rem;
    top: 2rem;
    bottom: 2rem;
    right: 2rem;*/
    border-radius: 3px;
    padding: 0.75rem;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>