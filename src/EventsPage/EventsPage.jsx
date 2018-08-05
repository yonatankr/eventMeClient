import React from 'react';
import { connect } from 'react-redux';

import {eventsActions} from '../_actions';

class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(eventsActions.getAll());
    }

    render() {
        const { events } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Events Page</h2>
                <h3>All registered events:</h3>
                {events.loading && <em>Loading events...</em>}
                {events.error && <span className="text-danger">ERROR: {events.error}</span>}
                {events.items &&
                <ul>
                    {events.items.map((event, index) =>
                        <li key={event.id}>
                            {event.name}
                        </li>
                    )}
                </ul>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { events } = state;
    return {
        events
    };
}

const connectedEventsPage = connect(mapStateToProps)(EventsPage);
export { connectedEventsPage as EventsPage };