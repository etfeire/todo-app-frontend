import React from 'react';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column">Task 1</div>
                <div className="column"><input type="submit" value="Done"></input></div>
                <div className="column"><input type="submit" value="Delete"></input></div>
            </div>
        );
    }
}

export default TaskItem;