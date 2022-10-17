import Form from '../../components/form/Form'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="signInLogo">
                <img src={require("../../assets/images/logo.png")} alt="Logo" />
                <h2>Protect & Manage every
                    password in your business </h2>
            </div>
            <div className="signInContent">
                <Form />
            </div>
        </div>
    )
}

export default Login