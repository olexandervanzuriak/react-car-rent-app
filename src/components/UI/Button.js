import "./ui.css"

export const Button = (props) => {
    return <button className={props.className} role="button">{props.text}</button>
}