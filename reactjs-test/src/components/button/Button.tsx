import './Button.css'
const Button = (props:any) => {
    return (
        <>
            <button type='submit' className={props.class_name}>{props.text}</button>
        </>
    )
}

export default Button