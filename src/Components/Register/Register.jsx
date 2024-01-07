import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmited = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('password should contain atleast one number and one special character"');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('You have register successfully');
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className=" border">
            <div className="mx-auto md:w-1/2">
                <h3 className=" text-3xl mb-5">Please Register</h3>
                <form onSubmit={handleSubmited}>
                    <input className="border w-3/4 mb-4" type="email" name="email" placeholder="Please enter your email" id="" required /><br />
                    <input className="border w-3/4 mb-4"
                        type={showPassword ? "text" : "password"}
                        placeholder="Please enter your password"
                        name="password"
                        id="" required />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEye /> : <FaEyeSlash />
                        }</span>
                    <input className=" bg-red-200 w-3/4 mb-4 border" type="submit" value="Register" />
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    {
                        registerError && <p className="text-red-800 text-xl">{registerError}</p>
                    }


                </form>
            </div>
        </div >
    );
};

export default Register;