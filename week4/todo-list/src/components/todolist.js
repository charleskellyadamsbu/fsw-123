import React from 'react'
import Todo from './todo'
import { v4 as uuidv4 } from "uuid";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: this.props.data};
        
        this.copy = [...this.state.todo];
        console.log(this.copy);

        this.delete = this.delete.bind(this);
        this.complete = this.complete.bind(this);

        this.addInput = React.createRef();
    }

    add(text) {
        if(text === "") return;
        
        this.copy = [...this.state.todo];

        this.copy.push({id: uuidv4(), text: text, isComplete: false});

        this.setState((state, props) => {
            return {todo: this.copy};
        });
    }

    complete(id) {
        console.log("TEST");
        this.copy = [...this.state.todo];

        this.copy = this.copy.filter((element) => {
            if(element.id === id) {
                console.log(element.isComplete);
                element.isComplete = !element.isComplete;
                console.log(element.isComplete);
            }

            return true;
        });

        this.setState((state, props) => {
            return {todo: this.copy};
        });

        console.log(this.state.todo);
    }

    delete(id) {
        this.copy = [...this.state.todo];

        this.copy = this.copy.filter((element) => {
            if(element.id === id) {
                return false;
            }

            return true;
        });

        this.setState((state, props) => {
            return {todo: this.copy};
        });
    }

    render() {
        return(
            <div className="todos">
                <h1>Todo List</h1>
                <input ref={this.addInput} type="text"></input>
                <button onClick={() => this.add(this.addInput.current.value)}>Add Todo</button>
                <ol>
                    { this.state.todo.map((element, index) => <Todo key={element.id} id={element.id} name={element.text} onComplete={this.complete} onDelete={this.delete} isComplete={element.isComplete}/>) }
                </ol>
            </div>
        )
    }
}

export default TodoList;