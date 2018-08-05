import {groupsConstants} from '../_constants';

export function groups(state = {loading : false, items : []}, action) {
    switch (action.type) {
        case groupsConstants.GET_ALL_GROUPS_FOR_EVENT_REQUEST:
            return Object.assign({}, ...state, {
                loading: true
            });
        case groupsConstants.GET_ALL_GROUPS_FOR_EVENT_SUCCESS:
            return Object.assign({}, ...state, {
                items: action.groups
            });
        case groupsConstants.GET_ALL_GROUPS_FOR_EVENT_FAILURE:
            return Object.assign({}, ...state, {
                error: action.error
            });
        default:
            return state
    }
}