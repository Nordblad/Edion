import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const INITIAL_STATE = {
    loggedIn: false,
    loggedInUser: {},
    //unsavedChanges: false,
    changes: []
};

// Vue.directive('field', {
//     bind: function (el, binding, vnode) {
//         let fieldName = binding.expression;
//         //console.log('v-field bound', el, vnode, oldvnode);
//         console.log('FieldName: ' + fieldName);
//         console.log('instance:', vnode)
//     }
// });

export default new Vuex.Store({
    //INITIAL_STATE,
    state: {
        changes: []
    },
    mutations: {
        increment(state, thing) {
            // mutate state
            state.changes.push(thing);
        }
    }
});
