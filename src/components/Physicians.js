import React, { Component } from 'react';

class Physicians extends Component {
    render() {
        return (
            <div className="physicians">
                <p>{this.props.firstName} {this.props.lastName}</p>
            </div>
        )
    }
}

export default Physicians;
