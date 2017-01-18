import React, { Component } from 'react';
import BinaryHexInput from './BinaryInput'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      binary: "010011111001000111111001",
      hex: "4f91f9",
      decimal: "5214713"
    }
  }

  handleBinaryInputChange(e) {
    let newTotal = "" + e.target.value;
    let newDecimal = parseInt(newTotal, 2)
    let newHex = parseInt(newTotal, 2).toString(16)
    this.setState({
      binary: newTotal,
      hex: newHex,
      decimal: newDecimal
    })
  }

  handleDecimalInputChange(e) {
    let newDecimal = "" + e.target.value
    let newTotal = newDecimal.toString(2)
    let newHex = parseInt(newTotal, 2).toString(16)
    this.setState({
      binary: newTotal,
      hex: newHex,
      decimal: newDecimal
    })
  }

  handleHexInputChange(e) {
    let newHex = "" + e.target.value;
    let newBinary = parseInt(newHex, 16).toString(2)
    let newDecimal = parseInt(newBinary, 2)
    this.setState({
      binary: newBinary,
      hex: newHex,
      decimal: newDecimal
    })
  }

  defineFontColor(binaryNum) {
    if (parseInt(binaryNum, 2) > 600){
      return "black"
    } else {
      return "white"
    }
  }

  render() {
    const { binary, hex, decimal } = this.state
    return (
      <div className="App">
        <h2>Change the text in any input.<br/>Happy converting!</h2>
        <BinaryHexInput
          binary={binary}
          decimal={decimal}
          hex={hex}
          onBinaryChange={this.handleBinaryInputChange.bind(this)}
          onDecimalChange={this.handleDecimalInputChange.bind(this)}
          onHexChange={this.handleHexInputChange.bind(this)}
        />

        <div className="hexcolorbox" style={{background: "#"+hex}}>
          <p style={{color: this.defineFontColor(binary)}}>{"#"+hex}</p>
        </div>
      </div>
    );
  }
}

export default App;
