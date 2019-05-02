import React from 'react';

class TaskItem extends React.Component {
    handleDeleteClick = () => {
        this.props.deleteTask(this.props.id);
    }
    render() {
        return (
            <div className="row">
                <div className="col-6">
            {/* add ternary for buttons etc */}
                <p>{this.props.taskText}</p>
                </div>
                <div className="col-3"><input type="submit" value="Done"></input></div>
                <div className="col-3"><input type="submit" value="Delete" onClick={this.handleDeleteClick}></input></div>
            </div>
        );
    }
}

export default TaskItem;