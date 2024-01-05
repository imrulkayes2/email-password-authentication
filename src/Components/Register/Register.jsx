import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Register = () => {
    const handleSubmited = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=" border">
            <div className="mx-auto md:w-1/2">
                <h3 className=" text-3xl mb-5">Please Register</h3>
                <form onSubmit={handleSubmited}>
                    <input className="border w-3/4 mb-4" type="email" name="email" placeholder="Please enter your email" id="" /><br />
                    <input className="border w-3/4 mb-4" type="password" placeholder="Please enter your password" name="password" id="" /> <br />
                    <input className=" bg-red-200 w-3/4 mb-4 border" type="submit" value="Register" />

                </form>
            </div>
        </div>
    );
};

export default Register;