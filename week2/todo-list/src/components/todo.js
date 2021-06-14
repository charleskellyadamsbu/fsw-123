import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li>
                <input type="checkbox"/>
                <label>{this.props.name}</label>
            </li>
        )
    }
}

export default Todo;