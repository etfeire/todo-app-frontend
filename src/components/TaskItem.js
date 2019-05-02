import React from 'react';

                // <input type="submit" value="Done" onClick={this.handleCompleteClick}></input>
                // <input type="submit" value="Delete" onClick={this.handleDeleteClick}></input>

class TaskItem extends React.Component {
    handleDeleteClick = () => {
        this.props.deleteTask(this.props.id);
    }
    handleCompleteClick = () => {
        this.props.completeTask(this.props.id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                {this.props.completed ? (
                    <p className="completed">{this.props.taskText}</p>
                ) : (
                    <p>{this.props.taskText}</p>
                )}
                </div>
                <div className="col-2">
                    {this.props.completed ? <p>Completed</p> : <p>Not completed</p>}
                </div>
                <div className="col-2">
                    <button onClick={this.handleDeleteClick}>Delete</button>
                </div>
                <div className="col-2">
                {!this.props.completed && (
                    <button onClick={this.handleCompleteClick}>Mark as complete</button>
                )}
                </div>
            </div>
        );
    }
}

export default TaskItem;