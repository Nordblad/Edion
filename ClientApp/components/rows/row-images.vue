<template>
    <ed-row-base backgroundClass="images" :rowId="rowId">
        <div slot="container" class="has-text-centered">
            <p class="title is-2 is-light-text is-letter-spaced">
                <ed-text fieldName="title" :rowId="rowId" defaultValue="Gallery" />
            </p>
            <p class="subtitle is-5 is-light-text">
                <ed-text fieldName="subTitle" :rowId="rowId" :defaultValue="{ type: 'lorem', words: 5, plain: true }" />
            </p>
            <div class="columns">
                <div class="column">
                    <ed-image fieldName="image1" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
                </div>
                <div class="column">
                    <ed-image fieldName="image2" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
                </div>
                <div class="column">
                    <ed-image fieldName="image3" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
                </div>
                <div class="column">
                    <ed-image fieldName="image4" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <ed-image fieldName="image5" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
                </div>
                <div class="column">
                    <ed-image fieldName="image6" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
                </div>
                <div class="column">
                    <ed-image fieldName="image7" size="4by3" :defaultValue="{ type: 'image' }" :rowId="rowId" />
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
    name: 'row-images',
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
.is-light-text,
.is-light-text .content {
    color: #FFF;
}
.is-letter-spaced {
    letter-spacing: 16px;
}
</style>