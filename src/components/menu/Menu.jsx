import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#intro"}>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#site"}>Our Products</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#works"}>Our Company</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#testimonials"}>Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={"#contact"}>Contact</a>
                </li>
            </ul>

        </div>
    )
}