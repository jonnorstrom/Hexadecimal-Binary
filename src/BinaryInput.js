import React from 'react';

function BinaryHexInput({binary, onBinaryChange, hex, onHexChange, decimal, onDecimalChange}) {
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
        <label>
          Decimal: &nbsp;#
          <input id="dec-input" autoFocus type="text" value={decimal} onChange={onDecimalChange}/>
        </label>
      </form>
    </div>
  )
}

export default BinaryHexInput;
