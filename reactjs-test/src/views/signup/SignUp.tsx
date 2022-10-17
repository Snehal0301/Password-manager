import Form from '../../components/form/Form'
import Toast from '../../components/toast/Toast'
import './SignUp.css'
const SignUp = () => {
    return (
        <>

            <Toast />
            <div className='login'>
                <div className="signUpLogo">
                    <img src={require("../../assets/images/logo.png")} alt="Logo" />
                    <h2>Protect & Manage every
                        password in your business </h2>
                </div>
                <div className="signUpContent">
                    <Form type="signup" />
                </div>
            </div>
        </>
    )
}

export default SignUp