import React from 'react'

function Header(props) {
  return (
    <>
    <div style={{background:props.mode, color:props.mode === 'gray'? 'black': 'gray'}}>ThemeToggler</div>
     <input type="checkbox" onChange={props.toggleMode} />
     </>
  )
}

export default Header