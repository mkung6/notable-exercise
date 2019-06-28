import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Physicians from './components/Physicians';
import Appointments from './components/Appointments';

class App extends Component {
    getAppointments = (id) => {
        return 1;
    }

    render() {
        const getPhysicians = this.props.allPhysiciansQuery.physicians || [];

        return (
            <div>
            {getPhysicians.map(physicians => (
                <Physicians
                    id={physicians.id}
                    firstName={physicians.firstName}
                    lastName={physicians.lastName}
                    onClick={this.getAppointments(physicians.id)}
                />
            ))}
            </div>
        )
    }
}

const ALL_PHYSICIANS_QUERY = gql`
    query AllPhysiciansQuery {
        physicians {
            id
            firstName
            lastName
        }
    }
`;
const APPOINTMENTS_QUERY = gql`
    query GetAppointmentsQuery($id: Int) {
        appointments(id: $id) {
            id
            firstName
            lastName
            time
            am
            kind
        }
    }
`;

export default compose(
    graphql(ALL_PHYSICIANS_QUERY, { name: 'allPhysiciansQuery' }),
    graphql(APPOINTMENTS_QUERY, { name: 'getAppointmentsQuery' }),
)(App);
