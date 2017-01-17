import React from 'react';

function BinaryHexInput({binary, onBinaryChange, hex, onHexChange}) {
  return (
    <div>
      <form>
        <label>
          Hex: &nbsp;#
          <input id="hex-input" autoFocus type="text" value={hex} onChange={onHexChange}/>
        </label>
        <label>
          Binary: &nbsp;
          <textarea id="bin-input" type="text" value={binary} onChange={onBinaryChange}/>
        </label>
      </form>
    </div>
  )
}

export default BinaryHexInput;
