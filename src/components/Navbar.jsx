import React from 'react'
import pantheonicon from "../../public/logo-v3-clickup-light.svg"
import "./Navbar.css"

function Navbar() {
  return (

    <div style={{
      width: "100%", position: "fixed", top: "0",
      zIndex: "1000", height: "100px", display: "flex", justifyContent: "center"
    }}>
      <div className="navbar-body" styles={{ display: "flex", flexDirection: "row" }}>

        <div style={{ boxShadow: "0 4px 6px 0 rgba(67, 46, 134, .04)", border: "1px solid rgb(217, 217, 217)", borderRadius: "12px", backgroundColor: "#ffff" }}>
          <div className='parent-1' style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "8px 13px" }}>

            <img className='img' src={pantheonicon} alt="brandimage" width={"90px"} style={{ marginRight: "13px" }} />

            <div className='text' style={{ borderLeft: "1px solid black", paddingLeft: "13px", flexDirection: "column" }} >

              <p style={{ fontSize: "10px", fontWeight: "500", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#292D34" }}>The everything</p>
              <p style={{ marginTop: "-4px", fontSize: "10px", fontWeight: "500", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#292D34" }}> app for work</p>

            </div>
          </div>
        </div>

        <div className='parent-2' style={{ display: "flex" }}>


          <div className='contact' style={{ padding: "3px", backgroundColor: "#ffff", border: "1px solid rgb(217, 217, 217)", borderRadius: "14px", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 6px 0 rgba(67, 46, 134, .04)" }}>
            <div className='contact-text' style={{ cursor: "pointer", color: "#24223E", padding: "5px 17px", borderRadius: "10px", fontSize: "1rem", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500" }}>
              Contact Sales
            </div>
          </div>

          <div className='authentication' style={{ padding: "4px 7px", backgroundColor: "#ffff", border: "1px solid rgb(217, 217, 217)", borderRadius: "14px", marginLeft: "0.7rem", boxShadow: "0 4px 6px 0 rgba(67, 46, 134, .04)" }}>
            <div className='login' style={{ cursor: "pointer", marginRight: "5px", borderRadius: "10px", paddingLeft: "0.4rem", paddingRight: "0.4rem", fontSize: "1rem", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "500", color: "#24223E" }}>Log in</div>

            <div className='signup' style={{ paddingTop: "5px", paddingBottom: "5px", cursor: "pointer", borderRadius: "8px", border: "1px solid grey", paddingLeft: "0.4rem", paddingRight: "0.4rem", display: "flex", alignItems: "center", fontSize: "1rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "700", color: "white" }}>Sign Up</div>
          </div>
          <div className='ham' style={{ flexDirection: "row" }}>
            <div className='m-outer-signup' style={{ paddingTop: "5px", paddingBottom: "5px", display: "flex", cursor: "pointer", borderRadius: "8px", border: "1px solid grey", paddingLeft: "0.4rem", paddingRight: "0.4rem", alignItems: "center", fontSize: "1rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "700", color: "white" }}>Sign Up</div>
            <div className="hamburger-menu" >
              <img
                src="https://www.freeiconspng.com/uploads/menu-icon-6.png"
                alt="hamburger"
                className="hamburger-img"
              /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
