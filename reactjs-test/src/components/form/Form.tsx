import Button from '../button/Button'
import Input from '../input/Input'
import './Form.css'
const Form = (props: any) => {
    return (
        <div className='FormBox'>
            {props.type === 'signup' ? <h1 className='signupTitle'>SIGN UP</h1> : <h1>SIGN IN TO YOUR ACCOUNT</h1>}
            {
                props.type === 'signup' ?
                <>
                <Input placeholder="Enter Mobile Number" type="text"/>
                        <Input placeholder="Enter 4 Digit MPin" type="password"/>
                        <div className="passwordInputBox">
                            <Input placeholder="Re-Enter 4 Digit MPin" type="password"/>
                            <img src={require("../../assets/images/eye_on.png")} alt="Password" className='togglePassword' />
                        </div>
                    </>
                    :
                    <>
                        <Input placeholder="Mobile Number" type="text"/>
                        <div className="passwordInputBox">
                            <Input placeholder="MPin" type="password"/>
                            <img src={require("../../assets/images/eye_on.png")} alt="Password" className='togglePassword' />
                        </div>
                    </>
            }

            {props.type === 'signup' ?
                <>
                    <Button text="SIGN UP" class_name= "signUpBtn"/>
                </>
                :
                <>
                    <p className='forgotPass'>Forgot your password?</p>
                    <Button text="SIGN IN" class_name="signInBtn" />
                    <p className='signUp'>Don’t have a Account? SIGNUP</p>
                </>
            }

        </div>
    )
}

export default Form