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

  handleInputChange(e) {
    let value = "" + e.target.value
    let type = e.target.id.substr(0, e.target.id.length - 6)
    var newBinary, newDecimal, newHex
    switch (type) {
      case "Binary":
        newBinary = value
        newDecimal = parseInt(newBinary, 2)
        newHex = newDecimal.toString(16)
        break;
      case "Hex":
        newHex = value
        newBinary = parseInt(newHex, 16).toString(2)
        newDecimal = parseInt(newBinary, 2)
        break;
      case "Decimal":
        newDecimal = parseInt(value, 0)
        newBinary = newDecimal.toString(2)
        newHex = parseInt(newBinary, 2).toString(16)
        break;
      default:

        break;
    }
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
          onChange={this.handleInputChange.bind(this)}
        />

        <div className="hexcolorbox" style={{background: "#"+hex}}>
          <p style={{color: this.defineFontColor(binary)}}>{"#"+hex}</p>
        </div>
      </div>
    );
  }
}

export default App;
