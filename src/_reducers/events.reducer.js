import { eventsConstants } from '../_constants';

export function events(state = {}, action) {
  switch (action.type) {
    case eventsConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case eventsConstants.GETALL_SUCCESS:
      return {
        items: action.events
      };
    case eventsConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}