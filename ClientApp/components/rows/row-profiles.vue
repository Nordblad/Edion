<template>
    <ed-row-base backgroundColor="#676767" gradientBackground="linear-gradient(to right, #284050, #006f88)">
        <div class="tile is-ancestor" slot="container">
            <div class="tile is-4 is-vertical is-parent">
                <div class="tile is-child box">
                    <ed-text fieldName="title1" defaultValue="Lorem ipsum" :rowId="rowId" class="title" />
                    <ed-text fieldName="box1" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis." :rowId="rowId" />
                </div>
                <div class="tile is-child box">
                    <ed-text fieldName="title2" defaultValue="Lorem ipsum" :rowId="rowId" class="title" />
                    <ed-text fieldName="box2" defaultValue="Lorem <a>ipsum dolor</a> sit amet, consectetur adipiscing elit.
                                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis." :rowId="rowId" />
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <ed-text fieldName="title3" defaultValue="Lorem ipsum" :rowId="rowId" class="title" />
                    <ed-text fieldName="box3" defaultValue="lorem(100)" :rowId="rowId" /> </div>
            </div>
        </div>
    </ed-row-base>
</template>

<script>
import EdText from '../ed-text'
import EdImage from '../ed-image'
import RowMixin from '../../edion/row-mixin'


export default {
    name: 'row-profiles',
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