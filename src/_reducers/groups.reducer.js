import {groupsConstants} from '../_constants';

export function groups(state = {loading : false, items : [], error: null}, action) {
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

        case groupsConstants.JOIN_GROUP_REQUEST:
            return Object.assign({}, ...state, {
                loading: true
            });
        case groupsConstants.JOIN_GROUP_SUCCESS:
            const clonedItems = [...state.items];
            const group = clonedItems.find((item) => item.id === action.groupId);
            group.users.push(action.user);
            return Object.assign({}, ...state, {
                users: group.users
            });
        case groupsConstants.JOIN_GROUP_FAILURE:
            return Object.assign({}, ...state, {
                error: action.error
            });

        default:
            return state
    }
}