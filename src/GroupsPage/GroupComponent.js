import React from 'react';
import UsersInGroup from './UsersInGroup'
import {userActions} from "../_actions";


class GroupComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleJoin = this.handleJoin.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleJoin() {
        this.setState({
            joined: true
        });

        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    handleLeave() {
        this.setState({
            joined: false
        });
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
                        {!this.state.joined &&
                        <button type="button" className="btn btn-success" onClick={this.handleJoin}>Join!</button>}
                        {this.state.joined &&
                        <button type="button" className="btn btn-warning" onClick={this.handleLeave}>Leave</button>}
                    </div>

                </div>
                <UsersInGroup users={group.users}/>
            </div>
        )
    }
}

export default GroupComponent;

