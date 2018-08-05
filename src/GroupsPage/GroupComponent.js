import React from 'react';
import UsersInGroup from './UsersInGroup'
import {groupsActions} from "../_actions";
import {connect} from "react-redux";

class GroupComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleJoin = this.handleJoin.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleJoin(groupId) {
        this.setState({
            joined: true
        });

        const { dispatch } = this.props;
        dispatch(groupsActions.joinGroup(groupId));
    }

    handleLeave() {
        this.setState({
            joined: false
        });

        const { dispatch } = this.props;
        dispatch(groupsActions.leaveGroup(groupId));
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
                        <button type="button" className="btn btn-success" onClick={() => {this.handleJoin(group.id)}}>Join!</button>}
                        {this.state.joined &&
                        <button type="button" className="btn btn-warning" onClick={this.handleLeave}>Leave</button>}
                    </div>

                </div>
                <UsersInGroup users={group.users}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {groups} = state;
    return {
        groups
    };
}

const connectedGroupsPage = connect(mapStateToProps)(GroupComponent);
export default connectedGroupsPage;

