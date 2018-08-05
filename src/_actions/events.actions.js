import { eventsConstants } from '../_constants';
import { eventsService } from '../_services';

export const eventsActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        eventsService.getAll()
            .then(
                events => dispatch(success(events)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: eventsConstants.GETALL_REQUEST } }
    function success(events) { return { type: eventsConstants.GETALL_SUCCESS, events } }
    function failure(error) { return { type: eventsConstants.GETALL_FAILURE, error } }
}