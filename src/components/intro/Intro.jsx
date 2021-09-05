
import React from 'react'
import "./intro.scss"

export default function Intro() {
    return (
        <div className={"intro"} id="intro">
            <div className={"left"}>
                <div className={"imgContainer"}>
                    <img src={"assets/049.jpg"} alt={"Carpentry"}/>
                </div>
            </div>

            <div className={"right"}>
                <div className={"wrapper"}>
                    <h1>Carpentry <span className={"logo3"}>by Lucas</span></h1>
                </div>
                <a href={"#site"} >
                    <img src={"assets/down.png" } alt="arrow-down"/>
                </a>
            </div>
        </div>

                )
            }