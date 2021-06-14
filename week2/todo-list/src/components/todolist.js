import React from 'react'
import Todo from './todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todos">
                <h1>Todo List</h1>
                <ol>
                    { this.props.data.map((element, index) => <Todo key={index} name={element.text} />) }
                </ol>
            </div>
        )
    }
}

export default TodoList;