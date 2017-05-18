<template>
    <ed-row-base backgroundClass="ed-bg-gradient1">
        <div class="tile is-ancestor" slot="container">
            <div class="tile is-4 is-vertical is-parent">
                <div class="tile is-child box">
                    <ed-text fieldName="title1" :defaultValue="{ type: 'lorem', words: 2 }" :rowId="rowId" class="title" />
                    <ed-text fieldName="box1" :defaultValue="{ type: 'lorem', words: 30 }"  :rowId="rowId" />
                </div>
                <div class="tile is-child box">
                    <ed-text fieldName="title2" :defaultValue="{ type: 'lorem', words: 3 }" :rowId="rowId" class="title" />
                    <ed-text fieldName="box2" :defaultValue="{ type: 'lorem', words: 40 }"  :rowId="rowId" />
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <ed-text fieldName="title3" :defaultValue="{ type: 'lorem', words: 4 }" :rowId="rowId" class="title" />
                    <ed-text fieldName="box3" :defaultValue="{ type: 'lorem', words: 200 }" :rowId="rowId" /> </div>
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
</style>