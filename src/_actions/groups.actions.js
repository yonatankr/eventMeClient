import { groupsConstants } from '../_constants';
import { groupsService } from '../_services';

export const groupsActions = {
    getGroupsForEvent
};

function getGroupsForEvent() {
    return dispatch => {
        dispatch(request());

        groupsService.getAllGroupsForEvent()
            .then(
                groups => dispatch(success(groups)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: groupsConstants.GET_ALL_GROUPS_FOR_EVENT_REQUEST } }
    function success(groups) { return { type: groupsConstants.GET_ALL_GROUPS_FOR_EVENT_SUCCESS, groups } }
    function failure(error) { return { type: groupsConstants.GET_ALL_GROUPS_FOR_EVENT_FAILURE, error } }
}