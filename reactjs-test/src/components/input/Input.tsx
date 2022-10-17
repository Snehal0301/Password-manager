import './Input.css';

const Input = (props: any) => {
    return (
        <>
            <input type={props.type} className='passwordInput' placeholder={props.placeholder} />
        </>
    )
}

export default Input