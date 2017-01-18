import React from 'react'

function ValueInput({value, onChange, type}){
  return(
    <div>
      <form>
        <label>
          {type}: &nbsp;#
          <input id={type + "-input"} autoFocus type="text" value={value} onChange={onChange}/>
        </label>
      </form>
    </div>
  )
}

export default ValueInput;
