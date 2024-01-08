import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import auth from '../../firebase/firebase.init';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [logInError, setLogInError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setLogInError('');
        setSuccess('');
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const logInUser = result.user;
                console.log(logInUser);
                setSuccess('LogIn successfully')
            })
            .catch((error) => {
                setLogInError(error.message)
            })
    }

    return (
        <div className=" border">
            <div className="mx-auto md:w-1/2">
                <h3 className=" text-3xl mb-5">Please Login</h3>
                <form onSubmit={handleLogin}>
                    <input className="border w-3/4 mb-4" type="email" name="email" placeholder="Please enter your email" id="" required /><br />
                    <div className="relative">
                        <input className="border w-3/4"
                            type={showPassword ? "text" : "password"}
                            placeholder="Please enter your password"
                            name="password"
                            id="" required />
                        <span className="absolute" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }</span>
                    </div> <br />
                    <div className="mb-2 mr-15">
                        <input type="checkbox" name="terms" id="" />
                        <label htmlFor="terms">Accept for our terms and conditions</label>
                    </div>
                    <input className=" bg-red-200 w-3/4 mb-4 border" type="submit" value="Login" />
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    {
                        logInError && <p className="text-red-800 text-xl">{logInError}</p>
                    }


                </form>
            </div>
        </div >
    );
};

export default Login;