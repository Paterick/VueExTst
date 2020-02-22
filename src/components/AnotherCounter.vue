<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 250, duration: 2500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 250, duration: 2500})">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions(['increment', 'decrement','asyncIncrement', 'asyncDecrement']),
            someOtherMethodHere() {
                // Another example of ES6 shadow copy
                // ... is called the spread operator.
                // It unpacks values from an object or array, into another object or array.
                // Requried an extra babel installation to work 1. npm install --save-dev babel-preset-stage-2 2. add ["stage-2"] to .bablerc presets
            }
        }
    }
</script>