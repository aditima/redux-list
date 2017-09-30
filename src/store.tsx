import { createStore } from 'redux';

interface IState {
    items: string[];
    breadcrumb: string;
}

function reducer(state: IState, action: { type: string; data: any }) {
    if (typeof state === 'undefined') {
        return {
            items: [],
            breadcrumb: 'Loading'
        };
    }
    switch (action.type) {
        case 'GET_DATA':
            let items = [ getItem(), getItem(), getItem() ];
            return {
                items: items,
                breadcrumb: (action.data ? action.data + ' > ' : '') + items[0]
            }
        case 'SORT':
            state.items = state.items.sort();
            return state;
        case 'RENAME':
            state.items[0] = state.items[0] + '1';
            return state;
        case 'UPLOAD':
            state.items = [ getItem() ].concat(state.items);
            return state;
        case 'DELETE':
            state.items.pop();
            return state;
        default:
            return state;
    }
}

function getItem() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '')[0];;
}

let store = createStore(reducer);

export default store;