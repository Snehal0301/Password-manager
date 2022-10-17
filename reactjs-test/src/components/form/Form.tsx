import Button from '../button/Button'
import Input from '../input/Input'
import './Form.css'
const Form = () => {
    return (
        <div className='signInBox'>
            <h1>SIGN IN TO YOUR ACCOUNT</h1>
            <Input placeholder="Mobile Number" />
            <div className="passwordInputBox">
                <Input placeholder="MPin" />
                <img src={require("../../assets/images/eye_on.png")} alt="Password" className='togglePassword' />
            </div>
            <p className='forgotPass'>Forgot your password?</p>
            <Button/>
            <p className='signUp'>Don’t have a Account? SIGNUP</p>
        </div>
    )
}

export default Form