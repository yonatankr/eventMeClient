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
                    <div className="group-container" key={index++}>
                        <GroupComponent group={group}/>
                    </div>
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
            description: "this is group 1 description",
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
            <div className="col-md-6 col-md-offset-3">
                {generateGroups(fakeGroups)}
                {/*<h2>Register</h2>*/}
                {/*<form name="form" onSubmit={this.handleSubmit}>*/}
                {/*<div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>*/}
                {/*<label htmlFor="firstName">First Name</label>*/}
                {/*<input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />*/}
                {/*{submitted && !user.firstName &&*/}
                {/*<div className="help-block">First Name is required</div>*/}
                {/*}*/}
                {/*</div>*/}
                {/*<div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>*/}
                {/*<label htmlFor="lastName">Last Name</label>*/}
                {/*<input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />*/}
                {/*{submitted && !user.lastName &&*/}
                {/*<div className="help-block">Last Name is required</div>*/}
                {/*}*/}
                {/*</div>*/}
                {/*<div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>*/}
                {/*<label htmlFor="username">Username</label>*/}
                {/*<input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />*/}
                {/*{submitted && !user.username &&*/}
                {/*<div className="help-block">Username is required</div>*/}
                {/*}*/}
                {/*</div>*/}
                {/*<div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>*/}
                {/*<label htmlFor="password">Password</label>*/}
                {/*<input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />*/}
                {/*{submitted && !user.password &&*/}
                {/*<div className="help-block">Password is required</div>*/}
                {/*}*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*<button className="btn btn-primary">Register</button>*/}
                {/*{registering && */}
                {/*<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />*/}
                {/*}*/}
                {/*<Link to="/login" className="btn btn-link">Cancel</Link>*/}
                {/*</div>*/}
                {/*</form>*/}
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