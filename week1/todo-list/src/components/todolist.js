import React from 'react'
import Todo from './todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.todos = ['Wash Car', 'Do Laundry', 'Wash Dishes'];
    }

    render() {
        return(
            <div className="todos">
                <h1>Todo List</h1>
                <ol>
                {
                    this.todos.map((element, index) => {
                        return <Todo key={index} name={element} />
                    })
                }
                </ol>
            </div>
        )
    }
}

export default TodoList;