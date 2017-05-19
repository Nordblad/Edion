<template>
    <ed-row-base backgroundClass="bar" :rowId="rowId">
        <nav class="level" slot="container">
            <div class="level-item">
                <div class="field is-grouped">
                    <div class="control">
                        <a class="button is-outlined">EN</a>
                    </div>
                    <div class="control">
                        <a class="button is-outlined">SE</a>
                    </div>
                    <div class="control">
                        <a class="button is-outlined">JN</a>
                    </div>
                </div>
            </div>
            <!--<div class="level-left">
            </div>-->
    
            <div class="level-item has-text-centered">
                <div class="field is-grouped">
                    <div class="control">
                        <a class="button is-outlined">
                            <span class="icon">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                    <div class="control">
                        <a class="button is-outlined">
                            <span class="icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                    <div class="control">
                        <a class="button is-outlined">
                            <span class="icon">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            </div>
    
                <div class="level-item">
                    <div class="field has-addons">
                        <div class="control">
                            <input type="text" class="input" />
                        </div>
                        <div class="control">
                            <button class="button">Search</button>
                        </div>
                    </div>
                </div>
            <!--<div class="level-right">
            </div>-->
    <!--.container:before {
    content: 'ASD';
    position: absolute;
    left: -10px;
    right: -10px;
    bottom: 0;
    top: 0;
    background-color: red;
}-->
        </nav>
    </ed-row-base>
</template>

<script>
import EdText from '../ed-text'
import EdImage from '../ed-image'
import RowMixin from '../../edion/row-mixin'


export default {
    name: 'row-bar',
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

</style>