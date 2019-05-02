import React from 'react';
import "./AddTask.css";

class AddTask extends React.Component {
    state = {
        text: ''
      }

    handleChange = (event) => {
        this.setState({
          text: event.target.value
        })
        }

    handleClick = () => {
            const newTask = this.state.text;
            if (newTask.length > 0) {
              this.props.addTask(newTask);
              this.setState({
                text: ''
              });
            }
        }

    render () {
            return (
              <div>
                <label htmlFor="inputNewTodo">Tips for becoming a developer:</label>
                <input placeholder="Insert your own tip here" type="text" id="inputNewTip" value={this.state.text} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Add</button>
              </div>
            );
        }
}

export default AddTask;