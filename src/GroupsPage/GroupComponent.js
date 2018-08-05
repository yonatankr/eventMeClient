import React from 'react';
import UsersInGroup from './UsersInGroup'

const GroupComponent = (props) => {
    const group = props.group;

    return (
        <div>
            <div className="group-details">
                <div className="group-details-left-side">
                    <div className="group-icon-container">
                        <img className="group-icon" src={group.imageUrl}/>
                    </div>
                </div>
                <div className="group-details-right-side">
                    <div className="group-details-container">
                        <div className="group-name">{group.name}</div>
                        <div className="group-name">{group.description}</div>
                    </div>
                </div>
            </div>
            <UsersInGroup users={group.users}/>
        </div>
    )
};

export default GroupComponent;

