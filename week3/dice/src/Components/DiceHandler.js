import React, { Component } from 'react'
import Dice from './Dice'

export class DiceHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {dice1: 1, dice2: 1};
        this.roll = this.roll.bind(this);
    }

    roll() {
        this.setState((state, props) => {
            return {dice1: this.random(), dice2: this.random()};
        });
    }

    random() {
        return Math.floor(Math.random() * 6) + 1;
    }

    render() {
        return (
            <div className="container">
                <Dice side={this.state.dice1}/>
                <Dice side={this.state.dice2}/>
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default DiceHandler
