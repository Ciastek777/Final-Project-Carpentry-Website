import "./siteList.scss";

export default function SiteList({id,title,active,setSelected}) {
    return(
        <li className={active ? "siteList active" : "siteList"}
            onClick={() => setSelected(id)}
            >
            {title}
        </li>
    )
}