import {combineReducers} from 'redux';

import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';
import {events} from './events.reducer';
import {alert} from './alert.reducer';
import {groups} from './groups.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    events,
    alert,
    groups
});

export default rootReducer;