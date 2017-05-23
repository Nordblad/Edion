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
    },
    DELETE_PAGE: (state, id) => {
        console.log('Deleting page ' + id);
        api.delete('/api/page?id=' + id, (data) => {
            state.commit('SET_PAGES', data);
            console.log('DELETE RESPONSE: ', data)
        });
    }
}

const getters = {
    numberOfRows: state => {
        return state.rowArray.length
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
        //rows: {},
        languageId: 0,
        selectedRow: 0,
        rowArray: [],
        fields: {}, // Mest för test
        canEdit: true
    },
    mutations: {
        TEST_TOGGLE_EDIT: (state) => {
            state.canEdit = !state.canEdit;
        },
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
            //state.rows = data;

            var newFieldObject = {};

            var newRowFormat = [];

            data.forEach((row, i) => {
                newRowFormat.push({
                    pageId: row.pageId,
                    rowId: row.rowId,
                    sortOrder: row.sortOrder,
                    type: row.type
                });
                newFieldObject[row.rowId] = row.fields || {}
            })

            // let randomColor = () => {
            //     var colors = ['darkred', 'darkgreen', 'lightgray', 'blue', 'teal', 'pink', 'white', '#F5F5F5', 'orangered', 'purple', 'orange', 'lightgreen'];
            //     return colors[Math.floor(Math.random() * colors.length)];
            // }
            // Object.keys(data).forEach((rowId, i) => {
            //     //console.log('LOADED ROW ' + 1, rowId );
            //     // var r = data[rowId];
            //     // Vue.set(r, 'id', rowId)
            //     //Vue.set(newFieldObject, rowId, r.fields || {} )
            //     var row = data[rowId];

            //     newFieldObject[rowId] = row.fields || {}

            //     newRowFormat.push({
            //         pageId: row.pageId,
            //         rowId: row.rowId,
            //         sortOrder: row.sortOrder,
            //         type: row.type
            //     });

            //     //newRowFormat.push(data[rowId]);
            // });

            // console.log('NEW ARRAY:', newRowFormat);
            // console.log('NEW FIELDS FORMAT TEST!', newFieldObject);
            state.rowArray = newRowFormat;
            state.fields = newFieldObject;
            console.log('STORE: rows updated', data);
        },
        ADD_ROW: (state, data) => {
            console.log('STORE: add_row:', data);
            state.history.push({
                time: new Date(),
                text: 'Row added',
                details: 'Type: ' + data.type
            });
            state.rowArray.push(data);
            Vue.set(state.fields, data.rowId, {});
            //Vue.set(state.rows, data.rowId, data);
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

            state.rowArray = state.rowArray.filter(function (item) {
                return item.rowId != rowId;
            });

            // Ugly, move to function..
            state.rowArray.forEach((row, i) => {
                if (row.sortOrder != i) {
                    row.sortOrder = i;
                    if (!state.changedRows.find(r => r.rowId == row.rowId)) {
                        state.changedRows.push(row);
                        console.log('Changed sort after delete on row ' + row.rowId)
                    }
                };
            })
            //state.rowArray.splice(state.rowArray.indexOf(v => { v.rowId == }))
            //Vue.delete(state.rows, rowId);
            console.log('store delete: ', rowId);
        },
        EDIT_FIELD: (state, data) => {
            // if (!state.rows[data.rowId].fields) {
            //     console.log('tror inte man ska se det här')
            //     Vue.set(state.rows[data.rowId], 'fields', { })
            // }
            let isNewField = false;
            if (!state.fields[data.rowId][data.name]) {
                console.log('No ' + data.name + ' prop in fields, creating');
                Vue.set(state.fields[data.rowId], data.name, {});
            }
            if (!state.fields[data.rowId][data.name][data.languageId]) {
                isNewField = true;
            }
            // if (!state.rows[data.rowId].fields[data.name]) {
            //     console.log('No ' + data.name + ' prop in fields, creating');
            //     Vue.set(state.rows[data.rowId].fields, data.name, {});
            // }
            // if (!state.rows[data.rowId].fields[data.name][data.languageId]) {
            //     isNewField = true;
            // }

            Vue.set(state.fields[data.rowId][data.name], data.languageId, data.value);
            //Vue.set(state.rows[data.rowId].fields[data.name], data.languageId, data.value)

            // console.log('Changed fields:', state.changedFields);
            // console.log('And rows:', state.changedRows);

            var cf = state.changedFields.find(x => x.rowId == data.rowId && x.name == data.name && x.languageId == data.languageId)
            if (cf) {
                //console.log('Fältet är redan redigerat', cf);
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
        },
        //this.$store.commit('SET_ROW_SORT_INDEX', { rowId: row.rowId, order: row.sortOrder - 1 });
        MOVE_ROW: (state, data) => { // { rowId, to, from ?}
            console.log('STORE, REORDER!', data);
            // for (var i = 0; i < state.rowArray.length; i++) {
            //     if ()
            // }
            // Going up
            let addToChangedRows = (row) => {
                var r = state.changedRows.find(v => v.rowId == row.rowId);
                if (!r) {
                    state.changedRows.push(row);
                }
            }
            if (data.to < data.from) {
                state.rowArray.forEach((v, i, huh) => {
                    //console.log('LOOP ' + i + ': ', v.rowId, v.sortOrder);
                    if (v.sortOrder == data.from) {
                        Vue.set(v, 'sortOrder', data.to);
                        //v.sortOrder = data.to;
                        addToChangedRows(v);
                    }
                    else if (v.sortOrder < data.from && v.sortOrder >= data.to) {
                        Vue.set(v, 'sortOrder', v.sortOrder + 1);
                        addToChangedRows(v);
                    }
                })

                //Vue.set(movingRow, 'sortOrder', data.to);
            } else {
                console.log('doown')
                state.rowArray.forEach((v, i) => {
                    //console.log('LOOP ' + i + ': ', v.rowId, v.sortOrder);
                    if (v.sortOrder == data.from) {
                        Vue.set(v, 'sortOrder', data.to);
                        //v.sortOrder = data.to;
                        console.log('Main papa from ', v.sortOrder, 'to ', data.to);
                        addToChangedRows(v)
                    }
                    else if (v.sortOrder > data.from && v.sortOrder <= data.to) {
                        console.log('Changing a sortOrder from', v.sortOrder, 'to', v.sortOrder - 1)
                        Vue.set(v, 'sortOrder', v.sortOrder - 1);
                        addToChangedRows(v);
                    }
                });
            }
            state.history.push({
                time: new Date(),
                text: 'Row order changed',
                details: ''// 'Row: ' + data.rowId + ', field: ' + data.name + ', language: ' + data.languageId
            });

        }
    }
});
