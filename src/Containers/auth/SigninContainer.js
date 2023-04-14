import AuthForm from "../../Components/auth/AuthForm";
import { signIn } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SigninContainer(props) {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        //success: 토큰
        //fail: 없음
        const response = await signIn({email, password});

        //오류 처리
        if (response) {
            setErrorMessage("");
            navigate("/todo");
        } else {
            setErrorMessage("비밀번호가 일치하지 않거나 존재하지 않는 사용자입니다");
        }
    }

    return (
        <AuthForm
            type="login"
            onSubmit={onSubmit}
            errorMessage={errorMessage}
        />
    );
}

export default SigninContainer;