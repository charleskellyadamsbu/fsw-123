import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.strike = this.props.isComplete ? "line-through" : "";

        return(
            <li>
                <input type="checkbox" onChange={(event) => {this.props.onComplete(this.props.id) }} />
                <label style={{textDecoration: this.strike}}>{this.props.name}</label>
                <button onClick={(event) => { this.props.onDelete(this.props.id) }}>X</button>
            </li>
        )
    }
}

export default Todo;