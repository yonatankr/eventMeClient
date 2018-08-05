import React from 'react';
import { connect } from 'react-redux';

import {eventsActions} from '../_actions';
import {Link} from 'react-router-dom';

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
                {events.loading && <em>Loading events...</em>}
                {events.error && <span className="text-danger">ERROR: {events.error}</span>}
                {events.items &&
                <div>
                    {events.items.map((event, index) =>
                        <div key={event.id} style={{ border: '1px solid black', cursor: 'pointer', marginBottom: '5px'}}>
                            {event.name}
                            <br/>
                            {event.description}
                            <br/>
                            <img src={event.image} style={{ width: '262px'}}/>
                            <br/>
                            <Link to="/groups" className="btn btn-link">Go to event page</Link>
                        </div>
                    )}
                </div>
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