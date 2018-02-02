import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentValue: 0,
      display: 0,
      newNumber: 0,
      sign: '',
    }

    this.addNumber=this.addNumber.bind(this)
    this.equals=this.equals.bind(this)
    this.sign=this.sign.bind(this)
    this.posNeg=this.posNeg.bind(this)
  }

  equals() {
    if(this.state.sign === '+'){
      let equal = (this.state.currentValue * 1) + (this.state.newNumber * 1)
      this.setState({
        sign: '',
        // currentValue: 0,
        display: equal,
        newNumber: 0,
      })
    } else if (this.state.sign === '-'){
      let equal = (this.state.currentValue * 1) - (this.state.newNumber * 1)
      this.setState({
        sign: '',
        // currentValue: 0,
        display: equal,
        newNumber: 0,
      })
    } else if (this.state.sign === '*'){
      let equal = (this.state.currentValue * 1) * (this.state.newNumber * 1)
      this.setState({
        sign: '',
        // currentValue: 0,
        display: equal,
        newNumber: 0,
      })
    } else if (this.state.sign === '/'){
      let equal = (this.state.currentValue * 1) / (this.state.newNumber * 1)
      this.setState({
        sign: '',
        // currentValue: 0,
        display: equal,
        newNumber: 0,
      })
    } else if (this.state.sign === ''){
      this.setState({
        sign: '',
        // currentValue: 0,
        // display: equal,
        newNumber: 0,
      })
    } 
  }

  sign(value) {
    if(this.state.sign === '+'){
      let add = (this.state.currentValue * 1) + (this.state.newNumber * 1)
      console.log(add)
      this.setState({
        sign: value,
        currentValue: add,
        display: add,
        newNumber: 0
      })
    } else if (this.state.sign === '-') {
      let add = (this.state.currentValue * 1) - (this.state.newNumber * 1)
      console.log(add)
      this.setState({
        sign: value,
        currentValue: add,
        display: add,
        newNumber: 0
      })
    } else if (this.state.sign === '*') {
      let add = (this.state.currentValue * 1) * (this.state.newNumber * 1)
      console.log(add)
      this.setState({
        sign: value,
        currentValue: add,
        display: add,
        newNumber: 0
      })
    } else if (this.state.sign === '/') {
      let add = (this.state.currentValue * 1) / (this.state.newNumber * 1)
      // console.log(add)
      this.setState({
        sign: value,
        currentValue: add,
        display: add,
        newNumber: 0
      })
    } else {
      this.setState({
      sign: value,
      currentValue: this.state.newNumber,
      newNumber: 0,
    })
  }
  }

  clear() {
    this.setState({
      currentValue: 0,
      display: 0,
      newNumber: 0,
    })
  }

  addNumber(value) {
    if(this.state.sign) {
      let display = (this.state.newNumber + value) * 1
      this.setState({
        newNumber: this.state.newNumber + value,
        display: display
      })
    } else if(!this.state.sign) {
      let display = (this.state.newNumber + value) * 1
      this.setState({
        newNumber: this.state.newNumber + value,
        display: display,
        currentValue: 0,
      })
    }
  }

  posNeg(value) {
    if(!this.state.sign) {
      let opposite = this.state.newNumber * -1
      this.setState({
        display: opposite,
        newNumber: opposite
      })
    } else if(this.state.sign) {
      let opposite = this.state.newNumber * -1
      this.setState({
        display: opposite,
        newNumber: opposite
      })
    }
  }

  percent() {
    if(this.state.sign) {
      let percent = this.state.newNumber * .01
      this.setState({
        display: percent,
        newNumber: percent
      })
    } else if(!this.state.sign) {
      let percent = this.state.currentValue * .01
      this.setState({
        display: percent,
        currentValue: percent
      })
    }
  }

  render() {
    // console.log(this.state.currentValue, this.state.sign, this.state.newNumber)
    // let current = this.state.currentValue * 1;
    // let sign = this.state.sign;
    // let newValue = this.state.newNumber * 1;

    return (
      <div className='calc-main'>
        <div className='calc-box'>
          <div className='calc-display'>
            <div className='calc-display-1'>
              {/* {current} {sign} {newValue} */}
            </div>
            <div className='calc-display-2'>
              {this.state.display}
            </div>
          </div>
          <div className='calc-keys'>
              <div className='calc-numbers'>
                <div className='calc-square' onClick={() => {this.clear()}}>AC</div>
                <div className='calc-square' onClick={() => {this.posNeg()}}>+/-</div>
                <div className='calc-square' onClick={() => {this.percent()}}>%</div>
                <div className='calc-square' onClick={() => {this.addNumber('7')}}>7</div>
                <div className='calc-square' onClick={() => {this.addNumber('8')}}>8</div>
                <div className='calc-square' onClick={() => {this.addNumber('9')}}>9</div>
                <div className='calc-square' onClick={() => {this.addNumber('4')}}>4</div>
                <div className='calc-square' onClick={() => {this.addNumber('5')}}>5</div>
                <div className='calc-square' onClick={() => {this.addNumber('6')}}>6</div>
                <div className='calc-square' onClick={() => {this.addNumber('1')}}>1</div>
                <div className='calc-square' onClick={() => {this.addNumber('2')}}>2</div>
                <div className='calc-square' onClick={() => {this.addNumber('3')}}>3</div>
                <div className='calc-bottom-square'>
                  <div className='calc-square square-1' onClick={() => {this.addNumber('0')}}>0</div>
                  <div className='calc-square square-2' onClick={() => {this.addNumber('.')}}>.</div>
                </div>
              </div>
            <div className='calc-signs'>
              <div className='calc-square' onClick={() => {this.sign('/')}}>/</div>
              <div className='calc-square' onClick={() => {this.sign('*')}}>X</div>
              <div className='calc-square' onClick={() => {this.sign('-')}}>-</div>
              <div className='calc-square' onClick={() => {this.sign('+')}}>+</div>
              <div className='calc-square' onClick={() => {this.equals()}}>=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
