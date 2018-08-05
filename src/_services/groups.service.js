import config from 'config';
import { authHeader } from '../_helpers';

export const groupsService = {
    getAllGroupsForEvent,
    joinGroupEvent
};

function getAllGroupsForEvent() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/groups`, requestOptions).then(handleResponse);
}

function joinGroupEvent(groupId) {
    const userId = 1; // TODO:get the userId from the userContextService
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader(),
        body : JSON.stringify({groupId , userId})
    };

    return fetch(`${config.apiUrl}/events/groups/${groupId}/join`, requestOptions);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}