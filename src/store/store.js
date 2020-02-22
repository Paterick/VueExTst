import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';
import * as actions from './actions.js';


Vue.use(Vuex);

// Comments show state of the file before moving the counter store info into a seperate file. I wanted to show what the code looked like before moving.

export const store = new Vuex.Store({
    state: {
        // counter: 0,

        value: 0,
    },
    getters: {
        // doubleCounter: (state) => {
        //     return state.counter * 2;
        // },
        // stringCounter: (state) => {
        //     return state.counter + ' clicks';
        // },

        value: (state) => {
            return state.value;
        }
    },
    mutations: {

        // increment: (state, payload) => {
        //     state.counter = (payload > 0) ? state.counter + payload : state.counter + 1;
        // },
        // decrement: (state, payload) => {
        //     state.counter = (payload > 0) ? state.counter - payload : state.counter - 1;
        // },
        updateValue: (state, payload) => {
            state.value = payload;
        }

    },
    // actions: {
    //     // notUsedExample: ( {commit} ) => {
    //     //     // This function is not using this for anything real but show how to 'destructure' an argument in ES6
    //     //     // It's pulling out the commit property from the context object passed in. Everything else is lost
    //     //     // but it's a shortcut if it's the only item you're interested in. 
    //     // },
    //     // increment: (context, payload) => {
    //     //     context.commit('increment', payload);
    //     // },
    //     // decrement: (context, payload) => {
    //     //     context.commit('decrement', payload);
    //     // },
    //     // asyncIncrement: (context, payload) => {
    //     //     setTimeout(() => {
    //     //         context.commit('increment', payload.by);
    //     //     }, payload.duration);
    //     // },
    //     // asyncDecrement: (context, payload) => {
    //     //     setTimeout(() => {
    //     //         context.commit('decrement', payload.by);
    //     //     }, payload.duration);
    //     // },

    //     // This action now comes from the actions.js file to show how to modularize store files.
    //     // updateValue: (context, payload) => {
    //     //     context.commit('updateValue', payload);
    //     // }
    // },
    actions: actions,
    modules: {
        counter: counter, // Merges in code from other modules into the one and only Vuex store object.
    }
});

