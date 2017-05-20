<template>
    <ed-row-base backgroundClass="bar" :rowId="rowId">
        <nav class="level" slot="container">
            <div class="level-left">
                <div class="level-item">
                    <a>English</a>
                </div>
                <div class="level-item">
                    <a>日本語で</a>
                </div>
            </div>
    
            <div class="level-right">
                <div class="level-item">
                    <a>
                        <span class="icon">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
                <div class="level-item">
                    <a>
                        <span class="icon">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
                <div class="level-item">
                    <a>
                        <span class="icon">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
                <div class="level-item">
                    <a>
                        <span class="icon">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
                <!--<div class="level-item">
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
                        </div>-->
            </div>
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