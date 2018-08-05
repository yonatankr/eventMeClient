import React from 'react';

const usersInGroupComponent = (props) => {

    const generateUsers = (users) => {
        let index = 0;
        return users.map((user) => {
            return (
                <div className="user-in-group float-left" key={index++}>
                    <img className="user-in-group-img" src={user.imageUrl} />
                    <div className="user-in-group-name">{user.name}</div>
                </div>
            )
        })
    };

    return (
        <div className="users-in-group-container">
            {generateUsers(props.users)}
        </div>

    )
};

export default usersInGroupComponent;

