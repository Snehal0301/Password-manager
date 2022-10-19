import Button from '../button/Button'
import './Form.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
const Form = (props: any) => {

    const [password, setPassword] = useState(false);

    const togglePassword = () => {
        setPassword(password ? false : true);
    };

    type userData = { mobileNo: number; mPin: number };

    const navigate = useNavigate();

    if (localStorage.getItem("users") === null) {
        localStorage.setItem(
            "userData",
            JSON.stringify(
                localStorage.setItem(
                    "users",
                    JSON.stringify([
                        { mobileNo: "9483030796", mPin: "8520" },
                        { mobileNo: "9480655132", mPin: "8521" },
                    ])
                )
            )
        );
    }

    const handleSignUp = (e: any) => {
        e.preventDefault();

        const mobileNo: number = e.target.mobileNo.value;
        const newMPin: number = e.target.newMPin.value;
        const confirmMpin: number = e.target.confirmMPin.value;

        const userData = { mobileNo, mPin: newMPin };

        const previousData: userData[] = JSON.parse(
            localStorage.getItem("users") || "[]"
        );

        console.log("userData", previousData);

        if (previousData.length > 0 && mobileNo) {
            const mappedUser = previousData.map((user) => {
                if (user.mobileNo === mobileNo) {
                    return "user";
                }
                return "no user";
            });


            if (newMPin === confirmMpin) {
                if (mappedUser.includes("user")) {
                    alert("user already exist");
                } else if (mappedUser.includes("no user")) {
                    previousData.push(userData);
                    sessionStorage.setItem("signUpSuccess", "true");
                    navigate("/");
                    localStorage.setItem(JSON.stringify(mobileNo), "[]");
                    window.location.reload();
                }
            } else {
                alert("mPin does not match");
            }

            console.log("pre", previousData);
            localStorage.setItem("users", JSON.stringify(previousData));
        } 
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        type userData = { mobileNo: number; mPin: number };
        console.log(e.target);

        const mobileNo = e.target.mobileNo.value;
        const mPin = e.target.mPin.value;

        const userData = { mobileNo, mPin };
        console.log('userData', userData);

        const users: userData[] = JSON.parse(
            localStorage.getItem('users') || '[]'
        );
        console.log('users', users);

        for (let i = 0; i < users.length; i++) {
            if (userData.mobileNo === users[i].mobileNo) {
                if (userData.mPin === users[i].mPin) {
                    localStorage.setItem('auth', 'authenticated');
                    navigate('/dashboard');
                    localStorage.setItem('currentUser', mobileNo);
                    window.location.reload();
                }
            }
        }
    };

    return (
        <div className='FormBox'>
            {
                props.type === 'signup' ?
                    <>
                        <form onSubmit={handleSignUp}>
                            <h1 className='signupTitle'>SIGN UP</h1>
                            <input type="text" placeholder="Enter Mobile Number" className='passwordInput' name='mobileNo' />
                            <input type="password" placeholder="Enter 4 Digit MPin" className='passwordInput' name='newMPin' />
                            <div className="passwordInputBox">
                                <input type={password ? "text" : "password"} placeholder="Re-Enter 4 Digit MPin" className='passwordInput' name='confirmMPin' />
                                <img src={require("../../assets/images/eye_on.png")} alt="Password" className='togglePassword' id='togglepass' onClick={togglePassword} />
                            </div>
                            <div className="signup">
                                <Button text="SIGN UP" class_name="signUpBtn" />
                            </div>
                        </form>
                    </>
                    :
                    <>
                        <form onSubmit={handleLogin}>
                            <h1>SIGN IN TO YOUR ACCOUNT</h1>
                            <input type="text" placeholder='Mobile Number' className='passwordInput' name='mobileNo'/>
                            <div className="passwordInputBox">
                                <input type={password ? "text" : "password"} placeholder="Re-Enter 4 Digit MPin" className='passwordInput' name='mPin'/>
                                <img src={require("../../assets/images/eye_on.png")} alt="Password" className='togglePassword' id='togglepass' onClick={togglePassword} />
                            </div>
                            <p className='forgotPass'>Forgot your password?</p>
                            <Button text="SIGN IN" class_name="signInBtn" />
                            <p className='signUp'>Don’t have a Account? <Link to="/signup">SIGN UP</Link> </p>
                        </form>
                    </>
            }
        </div>
    )
}

export default Form