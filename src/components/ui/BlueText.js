import React from 'react'

const BlueText = ({text,classN}) => {
  return (
    <span className={`${classN}`}>
      {" "} { text}
    </span>
  )
}

export default BlueText
