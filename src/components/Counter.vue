<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            ...mapMutations(['increment', 'decrement']),
            someOtherMethodHere() {
                // Another example of ES6 shadow copy
                // ... is called the spread operator.
                // It unpacks values from an object or array, into another object or array.
                // Requried an extra babel installation to work 1. npm install --save-dev babel-preset-stage-2 2. add ["stage-2"] to .bablerc presets
            }        }
    }
</script>