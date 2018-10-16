import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

class Frame extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div className="frame">
                <div className="calc-title">
                    Calculator
                </div>
                <Screen value={this.state.userInput} />
                <Screen value={this.state.answer} />
                <div className="button-row">
                    <Button label={'1'} handleClick={this.handleClick} type='input' />
                    <Button label={'2'} handleClick={this.handleClick} type='input' />
                    <Button label={'3'} handleClick={this.handleClick} type='input' />
                    <Button label={'-'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="button-row">
                    <Button label={'4'} handleClick={this.handleClick} type='input' />
                    <Button label={'5'} handleClick={this.handleClick} type='input' />
                    <Button label={'6'} handleClick={this.handleClick} type='input' />
                    <Button label={'+'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="button-row">
                    <Button label={'7'} handleClick={this.handleClick} type='input' />
                    <Button label={'8'} handleClick={this.handleClick} type='input' />
                    <Button label={'9'} handleClick={this.handleClick} type='input' />
                    <Button label={'*'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="button-row">
                    <Button label={'.'} handleClick={this.handleClick} type='input' />
                    <Button label={'0'} handleClick={this.handleClick} type='input' />
                    <Button label={'='} handleClick={this.handleClick} type='action' />
                    <Button label={'/'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="button-row">
                    <Button label={'Clr'} handleClick={this.handleClick} type='action' />
                </div>
            </div>
        )
    }

    handleClick(event) {
        const value = event.target.value;
        switch(value) {
            case '=': {
                const answer = eval(this.state.userInput).toString();
                this.setState({ answer });
                break;
            }
            case 'Clr': {
                this.setState({ userInput: '', answer: ''});
                break;
            }
            default: {
                this.setState({
                    userInput: this.state.userInput += value
                })
                break;
            }
        }
    }
}

export default Frame;