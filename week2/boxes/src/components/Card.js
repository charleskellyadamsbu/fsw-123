import React, { Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.color }} className="card">
                <h1>{this.props.title} {this.props.index}</h1>
                <h2>{this.props.subtitle} {this.props.index}</h2>
                <hr style={{width: "100%"}}></hr>
                <p>{this.props.description} {this.props.index}</p>
            </div>
        )
    }
}

export default Card
