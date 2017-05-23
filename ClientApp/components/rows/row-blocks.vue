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
                                <p class="card-footer-item is-downvote" @click="imageClicks = imageClicks - 1">
                                    <span class="icon">
                                        <i class="fa fa-thumbs-down"></i>
                                    </span>
                                </p>
                                <p class="card-footer-item">
                                    <strong>{{ imageClicks + 264 }}</strong>
                                </p>
                                <p class="card-footer-item is-upvote">
                                    <span class="icon">
                                        <i class="fa fa-thumbs-up" @click="imageClicks = imageClicks + 1"></i>
                                    </span>
                                </p>
                            </footer>
                            <!-- Put any content you want -->
                        </article>
                        <article class="tile is-child card">
                            <div class="card-image">
                                <figure class="image is-480x480">
                                    <img src="/dist/img/square480-2.jpg" @click="imageClicks = imageClicks + 1"/>
                                </figure>
                            </div>
                            <footer class="card-footer">
                                <p class="card-footer-item is-downvote" @click="imageClicks = imageClicks + 1">
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
                                    <a class="pagination-previous">
                                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    </a>
                                    <a class="pagination-next">
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </a>
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
                                            <button class="button is-medium is-success" @click="addMsg()">
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
            <div class="tile is-parent is-vertical">
                <!--<article class="tile is-child box">
                                                        <p class="title">{{ countDow}}
                                                    </article>-->
                <article class="tile is-child box">
                    <p class="title">Wide column</p>
                    <p class="subtitle">Aligned with the right column</p>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                </article>
                <article class="tile is-child box" style="position: relative;">
                    <div class="chat-container">
                        <div class="chat-messages">
                            <transition-group name="list-complete" tag="article">
                                <article class="chat-message list-complete-item" v-for="(item, i) in feed" :key="item.id">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-64x64">
                                                <img :src="'/dist/img/' + item.image">
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
                                            <small>{{ i }} m</small>
                                        </div>
                                    </article>
                                </article>
    
                            </transition-group>
                        </div>
                    </div>
                            <!--<transition-group name="list-complete" tag="article">
                                                <article class="list-complete-item" v-for="item in feed" :key="item.id">
                                                    <div class="chat-msg">
                                                        <figure class="image is-64x64">
                                                            <img :src="'/dist/img/' + item.image">
                                                        </figure>
                                                        <div class="msg-right">
                                                            <strong>{{ item.name }}</strong>
                                                            <small>{{ item.text }}</small>
                                                        </div>
                                                    </div>
                                                </article>
                                            </transition-group>-->
    
                    <!--<div class="chat-bottom is-half-padding">
                                                            <div class="field has-addons">
                                                                <p class="control is-expanded">
                                                                    <input type="text" class="input is-medium" placeholder="Chat" />
                                                                </p>
                                                                <p class="control">
                                                                    <button class="button is-medium is-dark">Send</button>
                                                                </p>
                                        
                                                            </div>
                                                        </div>-->
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
    mounted() {
        //var self = this;
        // let intervalFunction = (x, list) => {
        //     var r = Math.floor(Math.random() * 4) + 1;
        //     list.push({
        //         image: 'square' + r + '.jpg',
        //         name: 'Blerg Max' + r,
        //         text: 'Lorem ipsum dolor sit amet'
        //     });
        //     if (list.length > 3) {
        //         list.splice(list.length-1, 1);
        //     }
        // }
        // this.timer = setInterval
        //this.timer = setInterval(() => { self.addMsg(); }, 4000);
        for (var i = 0; i < 8; i++) {
            var self = this;
            setTimeout(() => self.addMsg(), i * 3500);
        }
    },
    destroyed() {

        this.timer = null;
    },
    data() {
        return {
            feed: [],
            imageClicks: 0,
            timer: null
        }
    },
    methods: {
        chatMessages(n) {
            var feed = [];
            for (var i = 0; i < n; i++) {
                var r = Math.floor(Math.random() * 4) + 1;
                feed.unshift({
                    id: this.imageClicks || 0,
                    image: 'square' + r + '.jpg',
                    name: 'Blerg Max' + r,
                    text: 'Lorem ipsum dolor sit amet'
                });
                this.imageClicks++;
            }
            return feed
        },
        addMsg() {
            let getR = (max) => Math.floor(Math.random() * max);
            var r = getR(4) + 1;

            this.feed.unshift({
                id: this.imageClicks || 0,
                image: 'square' + r + '.jpg',
                name: this.randName(),
                text: 'Nothing of value'
            });
            this.imageClicks = this.imageClicks + 1;
        },
        randName() {
            let first = ['Ross', 'Rachel', 'Phoebe', 'Monica', 'Changder'];
            return first[Math.floor(Math.random() * first.length)] + Math.floor(Math.random() * 2000) + 1956;
        }

    },
    computed: {
    },
    watch: {
        feed: function (newV) {
            //console.log('SPLICEFITTA', newV.id, oldV.id);
            if (newV.length > 10) {
                this.feed.pop();
                //setTimeout(() => )
                //this.feed.splice(0, 1);
            }
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
    left: 10px;
    top: 10px;
    bottom: 10px;
    right: 0px;
}

.chat-messages {
}

.chat-header {
    display: none;
}

.chat-messages .media {
 padding-right: 10px;
}

/*.chat-messages .media .media-left {
    margin-right: 0.6rem;
}*/

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

.flip-list-move {
    transition: transform 1s;
}

.chat-msg {
    padding: 8px;
    display: flex;
    max-height: 64px;
}

.chat-msg .msg-right {
    flex: 1;
    padding-left: 4px;
}

.chat-msg .msg-right strong {
    display: block;
}

.chat-msg .msg-right small {
    display: block;
}

.list-complete-item {
    transition: all 0.35s ease-out;
    opacity: 1;
    max-height: 80px;
    overflow: hidden;
    margin-bottom: 8px;
    /*display: block;*/
    /*margin-bottom: 70px;*/
    /*display: inline-block;*/
    /*margin-bottom: 50px;*/
}

.list-complete-enter,
.list-complete-leave-to {
    opacity: 0;
    max-height: 0px;
    /*transform: translateY(-64px)*/
    /*transform: scale(0.6);
    transform-origin: bottom;*/
    /*transform: translateY(-5px);*/
    /*transform: translateY(-70px);*/
    /*transform: translateY(70px)*/
    /*transform: scaleY(0);
    transform-origin: bottom;*/
}

.list-complete-leave-to {
    opacity: 0;
}

.list-complete-leave-active {
    /*position: absolute;*/
}
</style>