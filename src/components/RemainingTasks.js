import React from 'react';

class RemainingTasks extends React.Component {
    render() {
        return (
            <p>Tasks left to complete before I become a Developer: {this.props.numOfTasks}</p>
        )
    }
}

export default RemainingTasks;