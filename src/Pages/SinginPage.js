import React from "react";
import SigninContainer from "../Containers/auth/SigninContainer";
import AuthTemplate from "../Components/auth/AuthTemplate";

function SigninPage(props) {
    return (
        <AuthTemplate>
            <SigninContainer />
        </AuthTemplate>
    )
}

export default SigninPage;