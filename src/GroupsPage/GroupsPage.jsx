import React from 'react';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import GroupComponent from "./GroupComponent";

import "./groupsPage.css";

class GroupsPage extends React.Component {
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

        const generateGroups = (groups) => {
            let index = 0;
            return groups.map((group) => {
                return (
                    <GroupComponent group={group} key={index++}/>
                )
            });
        };


        const fakeGroups = [{
            id: 1,
            name: "group 1",
            description: "this is group 1 description",
            imageUrl: "https://cdn-images-1.medium.com/max/500/1*H_TkB6eVDf5iNVfpj_NWwA.jpeg",
            users: [{
                name: "yonatan",
                imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg'
            }, {
                name: "admon",
                imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
            }, {
                name: "tomer",
                imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg'
            }, {
                name: "tomer",
                imageUrl: 'https://randomuser.me/api/portraits/men/23.jpg'
            }]
        }, {
            id: 2,
            name: "group 2",
            description: "this is group 2 description",
            imageUrl: "https://media.makeameme.org/created/brace-yourself-hackathon.jpg",
            users: [{
                name: "yonatan",
                imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg'
            }, {
                name: "admon",
                imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
            }]
        }];


        const {registering} = this.props;
        const {user, submitted} = this.state;
        return (
            <div className="groups-container">
                {generateGroups(fakeGroups)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {registering} = state.registration;
    return {
        registering
    };
}

const connectedGroupsPage = connect(mapStateToProps)(GroupsPage);
export {connectedGroupsPage as GroupsPage};