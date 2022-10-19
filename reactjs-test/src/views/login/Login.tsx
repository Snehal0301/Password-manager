import Form from '../../components/form/Form'
import './Login.css'
import Toast from '../../components/toast/Toast'
const Login = () => {
    return (

        <>
            {/* <Toast /> */}
            <div className='login'>
                <div className="signInLogo">
                    <div className="signinLogo-header">
                        <img src={require("../../assets/images/logo.png")} alt="Logo" className='desktop-logo' />
                        <h2>Protect & Manage every
                            password in your business </h2>
                    </div>
                    <div className="signInLogo-mobile">
                        <img src={require("../../assets/images/mobile_logo.png")} alt="" className='mobile_logo' />
                    </div>
                    <div className="all-tabs">
                        <div className='tabs'>SIGN IN</div>
                        <div className='tabs'>SIGN UP</div>
                    </div>
                </div>
                <div className="signInContent">
                    <Form type="signin" />
                </div>
            </div>
        </>
    )
}

export default Login