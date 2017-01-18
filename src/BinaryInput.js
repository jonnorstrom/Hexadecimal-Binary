import React from 'react';
import ValueInput from './ValueInput'

function BinaryHexInput({binary, hex, onChange, decimal}) {
  return (
    <div>
      <ValueInput value={binary} onChange={onChange} type={'Binary'}/>
      <ValueInput value={hex} onChange={onChange} type={'Hex'}/>
      <ValueInput value={decimal} onChange={onChange} type={'Decimal'}/>
    </div>
  )
}

export default BinaryHexInput;
