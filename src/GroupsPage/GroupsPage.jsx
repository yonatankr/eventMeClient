import React from 'react';
import {connect} from 'react-redux';

import {groupsActions, userActions} from '../_actions';
import GroupComponent from "./GroupComponent";

import "./groupsPage.css";

class GroupsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(groupsActions.getGroupsForEvent());
    }

    generateGroups (groups) {
        if (!groups || !groups.length)
            return null;

        const groupsComponents = [];
        let index = 0;
        groups.forEach((group) => {
            groupsComponents.push(<GroupComponent group={group} key={index++}/>)
        });

        return groupsComponents;
    };

    render() {
        return this.generateGroups(this.props.groups.items)
    }
}

function mapStateToProps(state) {
    const {groups} = state;
    return {
        groups
    };
}

const connectedGroupsPage = connect(mapStateToProps)(GroupsPage);
export {connectedGroupsPage as GroupsPage};