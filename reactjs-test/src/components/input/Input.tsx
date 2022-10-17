import './Input.css';

const Input = (props: any) => {
    return (
        <>
            <input type="text" className='passwordInput' placeholder={props.placeholder} />
        </>
    )
}

export default Input