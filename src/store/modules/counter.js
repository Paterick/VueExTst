const state = {
    counter: 0
};

const getters = {
    doubleCounter: (state) => {
        return state.counter * 2;
    },
    stringCounter: (state) => {
        return state.counter + ' clicks';
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counter = (payload > 0) ? state.counter + payload : state.counter + 1;
    },
    decrement: (state, payload) => {
        state.counter = (payload > 0) ? state.counter - payload : state.counter - 1;
    }
};

const actions = {
    notUsedExample: ( {commit} ) => {
        // This function is not using this for anything real but show how to 'destructure' an argument in ES6
        // It's pulling out the commit property from the context object passed in. Everything else is lost
        // but it's a shortcut if it's the only item you're interested in. 
    },
    increment: (context, payload) => {
        context.commit('increment', payload);
    },
    decrement: (context, payload) => {
        context.commit('decrement', payload);
    },
    asyncIncrement: (context, payload) => {
        setTimeout(() => {
            context.commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: (context, payload) => {
        setTimeout(() => {
            context.commit('decrement', payload.by);
        }, payload.duration);
    }
};

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}