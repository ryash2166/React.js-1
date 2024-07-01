'use client'

import React from 'react'

const Value = (props) => {
  return (
    <div>
      <input type="text" value={props.counter} onChange={props.onChange} />
    </div>
  )
}

export default Value
