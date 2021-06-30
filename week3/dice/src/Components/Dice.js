import React, { Component } from 'react'

export class Dice extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="dice">
                {this.props.side}
            </div>
        );
    }
}

export default Dice
