import { groupsConstants } from '../_constants';
import { groupsService } from '../_services';

export const groupsActions = {
    getGroupsForEvent,
    joinGroup,
    leaveGroup
};

function leaveGroup(groupId) {
    return dispatch => {
        dispatch(request());

        groupsService.joinGroupEvent(groupId)
            .then(
                groups => dispatch(success(groups)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: groupsConstants.LEAVE_GROUP_REQUEST } }
    function success(groups) { return { type: groupsConstants.LEAVE_GROUP_SUCCESS, groups } }
    function failure(error) { return { type: groupsConstants.LEAVE_GROUP_FAILURE, error } }
}

function joinGroup(groupId) {
    return dispatch => {
        dispatch(request());

        groupsService.joinGroupEvent(groupId)
            .then(
                groups => dispatch(success(groups)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: groupsConstants.JOIN_GROUP_REQUEST } }
    function success(user) { return { type: groupsConstants.JOIN_GROUP_SUCCESS, user } }
    function failure(error) { return { type: groupsConstants.JOIN_GROUP_FAILURE, error } }
}

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