import React from 'react';

class AddTask extends React.Component {
    render() {
        return (
            <p id="list-description">Tips for becoming a developer:</p>
            <input type="text" name="tip" placeholder="Insert your own tip here"><br>
            <input type="submit" value="Add"></input>
        );
    }
}