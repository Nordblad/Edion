<template>
    <ed-row-base backgroundClass="gradient1" :rowId="rowId">
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
                            <footer class="card-footer">
                                <p class="card-footer-item is-downvote">
                                    <span class="icon">
                                        <i class="fa fa-thumbs-down"></i>
                                    </span>
                                </p>
                                <p class="card-footer-item">
                                    <strong>+3321</strong>
                                </p>
                                <p class="card-footer-item is-upvote">
                                    <span class="icon">
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
                                    <span class="icon">
                                        <i class="fa fa-thumbs-down"></i>
                                    </span>
                                </p>
                                <p class="card-footer-item">
                                    <strong>+213</strong>
                                </p>
                                <p class="card-footer-item is-upvote">
                                    <span class="icon">
                                        <i class="fa fa-thumbs-up"></i>
                                    </span>
                                </p>
                            </footer>
                            <!-- Put any content you want -->
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child ed-image-background box">
                            <div class="ed-image-overlay is-half-padding">
                                <nav class="pagination is-centered is-small">
                                    <a class="pagination-previous"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                    <a class="pagination-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                                    <ul class="pagination-list">
                                        <li>
                                            <a class="pagination-link">1</a>
                                        </li>
                                        <li>
                                            <span class="pagination-ellipsis">&hellip;</span>
                                        </li>
                                        <li>
                                            <a class="pagination-link">45</a>
                                        </li>
                                        <li>
                                            <a class="pagination-link is-current">46</a>
                                        </li>
                                        <li>
                                            <a class="pagination-link">47</a>
                                        </li>
                                        <li>
                                            <span class="pagination-ellipsis">&hellip;</span>
                                        </li>
                                        <li>
                                            <a class="pagination-link">86</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- Put any content you want -->
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box is-half-padding">
                        <nav class="level">
                            <!-- Left side -->
                            <div class="level-left">
                                <div class="level-item">
                                    <p class="subtitle is-6">
                                        Subscribe to out newsletter!
                                    </p>
                                </div>
                            </div>
    
                            <!-- Right side -->
                            <div class="level-right">
                                <div class="level-item">
                                    <div class="field has-addons">
                                        <p class="control">
                                            <input class="input is-medium" type="text" placeholder="Your email">
                                        </p>
                                        <p class="control">
                                            <button class="button is-medium is-success">
                                                Subscribe
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box" style="position: relative">
                    <div class="chat-container">
                        <div class="chat-header">CHAT</div>
                        <div class="chat-messages">
                            <article class="media" v-for="item in fakeNewsFeed">
                                <figure class="media-left">
                                    <p class="image is-64x64">
                                        <img src="/dist/img/square1.jpg">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>{{ item.name }}</strong>
                                            <br> {{ item.text }}
                                        </p>
                                    </div>
                                </div>
                                <div class="media-right">
                                    <small>31m</small>
                                    <!--<button class="delete"></button>-->
                                </div>
                            </article>
                        </div>
                        
                    </div>
                        <div class="chat-bottom is-half-padding">
                            <div class="field has-addons">
                                <p class="control is-expanded">
                                    <input type="text" class="input is-medium" placeholder="Chat"/>
                                </p>
                                <p class="control">
                                    <button class="button is-medium is-dark">Send</button>
                                </p>
    
                            </div>
                        </div>
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
            //fakeNewsFeed: []
        }
    },
    computed: {
        fakeNewsFeed() {
            var feed = [];
            for (var i = 0; i < 15; i++) {
                feed.push({
                    image: 'example1.jpg',
                    name: 'Blerg Max',
                    text: 'Lorem ipsum dolor sit amet'
                });
            }
            return feed
        }
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
    background-color: #fff;
    position: absolute;
    border-radius: 3px;
    padding: 0.9rem;
    left: 5px;
    bottom: 5px;
    right: 5px;
    box-shadow: 1px 1px 3px rgba(1, 1, 1, .1);
}

.chat-container {
    overflow: auto;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
bottom: 82px;
    margin: 8x;
    margin-right: 0;
}

.chat-header {
    display: none;
}

.chat-messages .media {
    margin: 0.6rem;
    padding-top: 0.6rem;
    margin-top: 0;
}

.chat-messages .media .media-left {
    margin-right: 0.6rem;
}
.chat-bottom {
        position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    /* height: 40px; */
    border-radius: 5px;
    box-shadow: 0 -1px 2px rgba(1, 1, 1, .1);
    background-color: #FFF;
}
.is-half-padding {
    padding: 0.8rem;
}
</style>