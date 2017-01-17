import React, { Component } from 'react';
import BinaryHexInput from './BinaryInput'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      binary: "010011111001000111111001",
      hex: "4f91f9"
    }
  }

  handleBinaryInputChange(e) {
    let newTotal = "" + e.target.value;
    let newHex = parseInt(newTotal, 2).toString(16)
    this.setState({
      binary: newTotal,
      hex: newHex
    })
  }

  handleHexInputChange(e) {
    let newHex = "" + e.target.value;
    let newBinary = parseInt(newHex, 16).toString(2);
    this.setState({
      binary: newBinary,
      hex: newHex
    })
  }

  render() {
    const { binary, hex } = this.state
    return (
      <div className="App">
        <BinaryHexInput
          binary={binary}
          hex={hex}
          onBinaryChange={this.handleBinaryInputChange.bind(this)}
          onHexChange={this.handleHexInputChange.bind(this)}
        />

        <div className="hexcolorbox" style={{background: "#"+hex}}>
          <p>{"#"+hex}</p>
        </div>
      </div>
    );
  }
}

export default App;
