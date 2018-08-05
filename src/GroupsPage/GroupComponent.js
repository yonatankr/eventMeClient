import React from 'react';
import UsersInGroup from './UsersInGroup'
import {userActions} from "../_actions";


class GroupComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        const {dispatch} = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {

        const group = this.props.group;

        return (
            <div className="group-container">
                <div className="group-details table">
                    <div className="group-details-left-side table-cell">
                        <div className="group-icon-container">
                            <img className="group-icon" src={group.imageUrl}/>
                        </div>
                    </div>
                    <div className="group-details-middle-side table-cell">
                        <div className="group-name">{group.name}</div>
                        <div className="group-description">{group.description}</div>
                    </div>
                    <div className="group-details-group-operations-side table-cell">
                        <button type="button" className="btn btn-success">Join!</button>
                        <button type="button" className="btn btn-warning">Leave!</button>
                    </div>

                </div>
                <UsersInGroup users={group.users}/>
            </div>
        )
    }
}

export default GroupComponent;

