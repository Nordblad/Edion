<template>
    <ed-row-base>
        <div class="columns" slot="container">
            <div class="column is-two-thirds">
                <div class="notification">
                    <ed-text fieldName="leftText" :defaultValue="{ type: 'lorem', words: 155 }" :rowId="rowId" />
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <ed-image fieldName="image" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
                    </div>
                    <div class="card-content">
                        <ed-text fieldName="imageDescription" :defaultValue="{ type: 'lorem', words: 15 }" :rowId="rowId" />
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
    name: 'row-simple',
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
</style>