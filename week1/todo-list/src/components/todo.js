import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todo">
                <input type="checkbox"/>
                <label>{this.props.name}</label>
            </div>
        )
    }
}

export default Todo;