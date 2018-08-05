import { eventsConstants } from '../_constants';

export function events(state = { items: [], loading: false, error: null }, action) {
  switch (action.type) {
      case eventsConstants.GETALL_REQUEST:
        return Object.assign({}, ...state, {
            loading: true
        });
    case eventsConstants.GETALL_SUCCESS:
        return Object.assign({}, ...state, {
            items: action.events
        });
    case eventsConstants.GETALL_FAILURE:
        return Object.assign({}, ...state, {
            error: action.error
        });
    default:
      return state
  }
}