<template>
    <ed-row-base backgroundClass="footer" :rowId="rowId">
        <!--<footer class="columns is-multiline" slot="container">
                                        <div class="column is-5">
                                            <div class="content">
                                                <strong>Olov Nordblad</strong><br>
                                                <a href="mailto:olle.nordblad@gmail.com">olle.nordblad@gmail.com</a><br>
                                                073 732 62 94
                                            </div>
                                        </div>
                                        <div class="column is-2 is-overlay-mobile">
                                            <ed-image fieldName="smallLogo" size="1by1" defaultValue="example-logo-square-dark.png" :rowId="rowId" />
                                        </div>
                                        <div class="column is-5 has-text-right">
                                            <ed-text fieldName="imageDescription" :defaultValue="{ type: 'lorem', words: 10 }" :rowId="rowId" />
                                            <div class="content">
                                                Vue.js<br>
                                                Bulma<br>
                                                .Net Core</br>
                                            </div>
                                        </div>
                                    </footer>-->
            <div class="columns is-mobile is-multiline" slot="container">
                <div class="column is-half-mobile is-5-tablet">
                    <div class="content">
                        <strong>Olov Nordblad</strong>
                        <br>
                        <a href="mailto:olle.nordblad@gmail.com">olle.nordblad@gmail.com</a>
                        <br> 073 732 62 94
                    </div>
                </div>
                <div class="column is-12-mobile is-2-tablet is-first-mobile">
                    <ed-image fieldName="smallLogo" size="64x64" defaultValue="example-logo-square-dark.png" :rowId="rowId" :center="true" />
                </div>
                <div class="column is-half-mobile is-5-tablet has-text-right">
                    <div class="content">
                        Vue.js
                        <br> Bulma
                        <br> .Net Core</br>
                    </div>
                </div>
            </div>
        <!--<div class="box" slot="container">
                                    <div class="columns">
                                        <div class="column is-12-mobile is-2-tablet">
                                            <div class="notification is-danger">SMALL</div>
                                        </div>
                                        <div class="column is-12-mobile is-5-tablet">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                                    <div class="notification">LEFT</div>
                                                </div>
                                                <div class="column">
                                                    <div class="notification is-warning">RIGHT</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>-->
    </ed-row-base>
</template>

<script>
import EdText from '../ed-text'
import EdImage from '../ed-image'
import RowMixin from '../../edion/row-mixin'


export default {
    name: 'row-footer',
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
@media screen and (max-width: 768px) {
    .is-first-mobile {
        order: -1
    }
}
</style>