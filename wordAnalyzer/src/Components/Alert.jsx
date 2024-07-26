import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
       const lower = word.toLowerCase()
       return lower[0].toUpperCase() + lower.slice(1)
    }
  return (
    
    props.alert &&
<div><h3> {capitalize(props.alert.type)}  {props.alert.msg}</h3></div>
  )
}

export default Alert