import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmited = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const check = e.target.terms.checked;
        console.log(name, email, password, check);
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
        else if (!check) {
            setRegisterError("Please, At first Accept our terms and condition");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if (result.user.emailVerified) {
                    setSuccess('User Created successfully')
                }
                else {
                    alert('please verify your email')
                }
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                    .then(console.log('profile updated'))
                    .catch((error) => {
                        console.log(error.message);
                    })
                sendEmailVerification(result.user)
                    .then(() => {
                        alert('please check your email for verification')
                    })
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
                    <input className="border w-3/4 mb-4" type="text" name="name" placeholder="Please enter your Name" id="" required /><br />
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
                    <input className=" bg-red-200 w-3/4 mb-4 border" type="submit" value="Register" />
                </form>
                {
                    success && <p className="text-green-600">{success}</p>
                }
                {
                    registerError && <p className="text-red-800 text-xl">{registerError}</p>
                }
                <p>Already have an account please go to <a className='text bg-green-500 rounded-lg p-1' href="/login">Log In</a></p>
            </div>
        </div >
    );
};

export default Register;