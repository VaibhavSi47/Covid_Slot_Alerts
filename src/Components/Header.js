import React from "react"
const styles ={
  fontFamily:"cursive",
  fontWeight: "normal",
  fontStyle: "italic",
  fontSize: "2vw",
  textAlign: "center",
  padding: "10px 25px 10px 5px",
}

function Header(){
  return (
    <div>
      <header style={styles}>Find COVID vaccines near you</header>
      
    </div>
  )
}

export default Header 