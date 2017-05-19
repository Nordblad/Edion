<template>
    <ed-row-base backgroundClass="header" :rowId="rowId">
        <div class="columns" slot="container">
            <div class="column is-4 is-offset-4">
                <ed-image fieldName="logoType" defaultValue="example-logo-white.png" :rowId="rowId" size="2by1"/>
            </div>
        </div>
    </ed-row-base>
</template>

<script>
import EdText from '../ed-text'
import EdImage from '../ed-image'
import RowMixin from '../../edion/row-mixin'


export default {
    name: 'row-header',
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