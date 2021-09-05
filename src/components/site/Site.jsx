import React, {useState} from 'react'
import "./site.scss"
import SiteList from "../siteList/SiteList";


export default function Site() {
        const [selected,setSelected] = useState("Our Products")
    const list=[
                {
                    id: "Our Products",
                    title: "Our Products",

                },
            ];
    return(
        <div className={"site"} id={"site"}>
        <h1 className={"logo4"}>Carpentry <span> by Lucas</span></h1>
            <ul className={"siteUl"}>
                {list.map((item)=>(
                    <SiteList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className={"container2"}>
                <div className={"item"}>
                    <img className={"kitchen1"} src={"assets/kuchnia1.jpeg"}  alt="kitchen"/>
                    <img className={"kitchen2"} src={"assets/kuchnia2.jpeg"}  alt="kitchen"/>
                    <img className={"kitchen3"} src={"assets/kuchnia3.jpeg"}  alt="kitchen"/>
        </div>
        </div>
        </div>
    )
}