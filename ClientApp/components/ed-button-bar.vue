<template>
    <div :class="containerClasses">
        <div class="ed-button-bar-content">
            <slot></slot>
        </div>
        <transition name="fade-quick">
            <div class="box ed-button-bar is-marginless" v-show="showToolbar" :style="styleObject">
                <div class="field is-horizontal">
                    <div class="field-body">
                        <slot name="buttons"></slot>
                    </div>
                </div>
            </div>
        </transition>
        <!--<div :class="classes">-->
        <!--<div class="card-content">-->
        <!--<slot name="buttons"></slot>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
export default {
    name: 'ed-button-bar',
    props: {
        show: {
            default: 'hover'
            // type: Boolean,
            // default: false
        },
        position: {
            type: String,
            default: 'topleft'
        }
    },
    computed: {
        showToolbar: function () {
            return this.show === 'hover' ? true : this.show
        },
        containerClasses: function () {
            return {
                'ed-button-bar-container': true,
                'show-toolbar-on-hover': this.show === 'hover' ? true : false
            }
        },
        classes: function () {
            if (!this.pos || this.pos == 'topleft') {
                return ['box', 'ed-button-bar', 'is-top-left']
            }
        },
        styleObject: function () {
            if (this.position === 'topleft') {
                return {
                    left: '5px',
                    top: '5px'
                }
            } else if (this.position == 'below') {
                return {
                    left: '-2px',
                    bottom: '-44px'
                }
            }
        }
    },
    mounted() {
        var w = this.$el.clientWidth
        var h = this.$el.clientHeight;
        var oLeft = this.$el.offsetLeft;
        var el = this.$slots.default[0].elm;
        var elWidth = el.clientWidth;
        var elX = el.offsetLeft;
        if (elWidth)
        //var y = el.clientWidth;
        if (elWidth > 200) return;
        console.log('Position:', this.position, 'toolbar width', w, 'x', oLeft);
        console.log('Button bar', this, el.clientWidth);
        console.log('Element w', elWidth, 'x', elX);
    }
    //   data () {
    //     return {
    //       msg: 'Welcome to ed-button-bar'
    //     }
    //   }
}
</script>

<style>
.ed-button-bar-container {
    position: relative;
}

.ed-button-bar {
    padding: 2px;
    background-color: #656565;
    position: absolute;
    z-index: 3;
    letter-spacing: 0;
}

.ed-button-bar-container.show-toolbar-on-hover .ed-button-bar {
    /*display: none;*/
    opacity: 0;
    transform: translateY(3px);
    transition-delay: 0.1s;
}

.ed-button-bar-container.show-toolbar-on-hover:hover {
    box-shadow: 0 0 0 1px #696969;
}

.ed-button-bar-container.show-toolbar-on-hover:hover .ed-button-bar {
    opacity: 1;
    transform: none;
    transition: all .15s ease-in-out;
}

.fade-quick-enter-active,
.fade-quick-leave-active {
    transition: all .15s ease-in-out;
}

.fade-quick-enter,
.fade-quick-leave-to {
    opacity: 0;
    transform: translateY(3px);
}
</style>