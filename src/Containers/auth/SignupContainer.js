import AuthForm from "../../Components/auth/AuthForm";
import { signUp } from "../../lib/api";
import { useNavigate } from "react-router-dom";

function SignupContainer(props) {

    const navigate = useNavigate();

    const onSubmit = async(e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        await signUp({email, password});
    };

    return (
        <AuthForm
            type="register"
            onSubmit={onSubmit}
        />
    );
}

export default SignupContainer;