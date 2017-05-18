import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import Languages from '../languages'

Vue.use(Vuex)

// Vue.directive('field', {
//     bind: function (el, binding, vnode) {
//         let fieldName = binding.expression;
//         //console.log('v-field bound', el, vnode, oldvnode);
//         console.log('FieldName: ' + fieldName);
//         console.log('instance:', vnode)
//     }
// });

const actions = {
    FETCH_ROWS: (state, pageId) => {
        api.get('/api/row?pageId=' + pageId, rows => state.commit('SET_ROWS', rows));
    },
    FETCH_PAGES: (state) => {
        api.get('/api/page/', pages => state.commit('SET_PAGES', pages));
    },
    SAVE: (state, changes) => {
        console.log('Saving!');
        api.post('/api/row/', changes, (data) => {
            state.commit('CLEAR_CHANGED');
            console.log('SAVE RESPONSE: ', data)
        });
    }
}

const getters = {
    numberOfRows: state => {
        return Object.keys(state.rows).length;
    }
}

export default new Vuex.Store({
    //INITIAL_STATE,
    actions,
    getters,
    state: {
        pages: [],
        history: [],
        changedRows: [],
        changedFields: [],
        rows: {},
        languageId: 0,
        selectedRow: 0
    },
    mutations: {
        SELECT_ROW: (state, id) => {
            console.log('Selecting row ' + id + '?')
            state.selectedRow = id;
        },
        CHANGE_LANGUAGE: (state, languageCode) => {
            state.languageId = Languages[languageCode.toLowerCase()].id;
            console.log('Changed language to ' + languageCode + ', ' + Languages[languageCode.toLowerCase()].id);
        },
        SET_PAGES: (state, data) => {
            state.pages = data;
            console.log('STORE: pages updated');
        },
        SET_ROWS: (state, data) => {
            state.rows = data;
            console.log('STORE: rows updated');
        },

        // increment(state, thing) {
        //     // mutate state
        //     state.changes.push(thing);
        // },
        ADD_ROW: (state, data) => {
            console.log('STORE: add_row:', data);
            state.history.push({
                time: new Date(),
                text: 'Row added',
                details: 'Type: ' + data.type
            });
            Vue.set(state.rows, data.rowId, data);
            state.changedRows.push(data);
        },
        DELETE_ROW: (state, rowId) => {
            state.history.push({
                time: new Date(),
                text: 'Row deleted',
                details: 'RowId: ' + rowId
            });
            if (rowId > 0) {
                state.changedRows.push({
                    rowId: rowId,
                    delete: true
                });
            }
            Vue.delete(state.rows, rowId);
        },
        EDIT_FIELD: (state, data) => {
            // if (!state.rows[data.rowId].fields) {
            //     console.log('tror inte man ska se det här')
            //     Vue.set(state.rows[data.rowId], 'fields', { })
            // }
            let isNewField = false;
            if (!state.rows[data.rowId].fields[data.name]) {
                console.log('No ' + data.name + ' prop in fields, creating');
                Vue.set(state.rows[data.rowId].fields, data.name, {});
            }
            if (!state.rows[data.rowId].fields[data.name][data.languageId]) {
                isNewField = true;
            }

            Vue.set(state.rows[data.rowId].fields[data.name], data.languageId, data.value)

            // console.log('Changed fields:', state.changedFields);
            // console.log('And rows:', state.changedRows);

            var cf = state.changedFields.find(x => x.rowId == data.rowId && x.name == data.name && x.languageId == data.languageId)
            if (cf) {
                console.log('Fältet är redan redigerat', cf);
                cf.value = data.value;
            } else {
                console.log('Adding a field to changed...')
                state.changedFields.push(data);
            }
            if (!isNewField) {
                state.history.push({
                    time: new Date(),
                    text: 'Field changed',
                    details: 'Row: ' + data.rowId + ', field: ' + data.name + ', language: ' + data.languageId
                });
            }
        },
        CLEAR_CHANGED: (state) => {
            state.changedFields = [];
            state.changedRows = [];
        }
    }
});
