import React from "react";
import "./topbar.scss"
export default function Topbar({menuOpen, setMenuOpen}) {
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className={"wrapper"}>
                <div className={"left"}>
                    <a href={"#intro"} className={"logo"}>Carpentry <span className={"logo2"}>by Lucas</span></a>
                <div className="itemContainer">
                </div>
                </div>
                <div className={"right"}>
                <div className={"hamburger"} onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className={"line1"}/>
                    <span className={"line2"}/>
                    <span className={"line3"}/>
                </div>
                </div>
                </div>
            </div>
           );
            }