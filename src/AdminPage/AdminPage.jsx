import React from 'react';
import { connect } from 'react-redux';

import Form from "react-jsonschema-form";
import {userActions} from '../_actions';

const schema = {
    title: "Create new event",
    type: "object",
    required: [
        "name",
        "description",
        "image"
    ],
    properties: {
        name: {
            type: "string",
            title: "Event Name"
        },
        description: {
            type: "string",
            title: "Event Description"
        },
        image: {
            type: "string",
            format: "data-url",
            title: "Event Image"
        }
    }
};

const uiSchema = {
    name: {
        "ui:autofocus": true,
        "ui:emptyValue": ""
    },
    description: {
        "ui:widget": "textarea"
    },
    image: {
        "ui:widget": "file"
    }
};

const log = (type) => console.log.bind(console, type);

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleEventSubmit = this.handleEventSubmit.bind(this);
    }

    handleEventSubmit({formData}) {
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    };

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Admin Page</h2>
                <Form schema={schema}
                      uiSchema={uiSchema}
                      onSubmit={this.handleEventSubmit}
                      onError={log("errors")} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedAdminPage = connect(mapStateToProps)(AdminPage);
export { connectedAdminPage as AdminPage };