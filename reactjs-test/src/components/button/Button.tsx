import './Button.css'
const Button = (props:any) => {
    return (
        <>
            <button className={props.class_name}>{props.text}</button>
        </>
    )
}

export default Button