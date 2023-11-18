import "./link.css"

function Menu ({href, text}){
    return(
        <>
            <div className="link">
                <a href={href}>{text}</a>
            </div>
        </>

    )
}
export default Menu