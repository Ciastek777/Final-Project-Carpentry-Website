import React, {useState} from 'react'
import "./works.scss"
export default function Works() {
    const[currentSlide, setCurrentSlide] = useState(0);
        const data=[
                {
                    id:"1",
                    title:"Our Company",
                    desc:"Lorem ipsum dolor sit amet",
                    img:" assets/031.JPG",
                },
                {
                    id:"2",
                    title:"Our Company",
                    desc:"Lorem ipsum dolor sit amet",
                    img: "assets/040.JPG"
                },
                {
                    id: "3",
                    title: "Our Company",
                    desc: "Lorem ipsum dolor sit amet",
                    img: "assets/048.JPG",
                },
                {
                    id: "4",
                    title: "Our Company",
                    desc: "Lorem ipsum dolor sit amet",
                    img: "assets/035.JPG",
                },
            ];
    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
        return(
        <div className={"works"} id={"works"}>
        <div className={"slider"}
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
            {data.map(d=>(
            <div className={"container"}>
                <div className={"item"}>
                    <div className={"left"}>
                        <div className={"leftContainer"}/>
                        <h2>{d.title}</h2>
                        <p>{d.desc}</p>
                    </div>
                        <div className={"right"}>
                            <img src={d.img} alt=""
                            />
                        </div>
                        </div>
                    </div>
                ))}
        </div>
            <img
                src={"assets/arrow.png"}
                className="arrow left" alt={""}
                onClick={() => handleClick("left")}
            />
            <img
                src={"assets/arrow.png"}
                className="arrow right" alt={""}
                onClick={() => handleClick()}
            />
        </div>
    );
}
