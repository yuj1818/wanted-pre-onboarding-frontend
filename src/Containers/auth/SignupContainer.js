import AuthForm from "../../Components/auth/AuthForm";
import { signUp } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupContainer(props) {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await signUp({email, password});

        //오류 처리
        if (response) {
            setErrorMessage(response);
        } else {
            setErrorMessage("");
            navigate("/signin");
        }
    };

    return (
        <AuthForm
            type="register"
            onSubmit={onSubmit}
            errorMessage={errorMessage}
        />
    );
}

export default SignupContainer;