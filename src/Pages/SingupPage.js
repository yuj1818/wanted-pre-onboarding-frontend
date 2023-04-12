import React from "react";
import SignupContainer from "../Containers/auth/SignupContainer";
import AuthTemplate from "../Components/auth/AuthTemplate";

function SignupPage(props) {
    return (
        <AuthTemplate>
            <SignupContainer />
        </AuthTemplate>
    );
}

export default SignupPage;