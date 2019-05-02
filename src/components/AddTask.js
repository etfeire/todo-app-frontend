import React from 'react';
import "./AddTask.css";

class AddTask extends React.Component {
    render() {
        return (
                <form>
                    <p id="list-description">Tips for becoming a developer:</p>
                    <input type="text" name="tip" placeholder="Insert your own tip here"></input>
                    <input type="submit" value="Add"></input>
                </form>
            );
        }
}

export default AddTask;