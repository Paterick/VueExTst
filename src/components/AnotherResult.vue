<template>
    <div>
        <p>Another Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        // This is how the code worked before which prevents us from creating other computer properties.
        // computed: mapGetters(['stringCounter', 'doubleCounter']). MapGetter requries import above ^^^
        computed: {
            ...mapGetters( // The 3 dots ... tell ES6 to pull all the items in the object up to the higher object -- this requried an extra babel installation to work 1. npm install --save-dev babel-preset-stage-2 2. add ["stage-2"] to .bablerc presets
                ['doubleCounter', 'stringCounter']
            ),
            outOwnComputerProperty() {

            }
        }
    }
</script>