import { useState } from "react";

function useEmail() {
    const [email, setEmail] = useState("");
    const [isValidatedEmail, setIsValidatedEmail] = useState(false);

    const onChangeEmail = (currentValue) => {
        setEmail(currentValue);
    };

    const validateEmail = (currentValue) => {
        if (currentValue.includes("@")) {
            setIsValidatedEmail(true);
        } else {
            setIsValidatedEmail(false);
        }
    };

    const onChangeValidatedEmail = e => {
        onChangeEmail(e.target.value);
        validateEmail(e.target.value)
    }

    return {
        email,
        isValidatedEmail,
        onChangeValidatedEmail,
    };
}

export default useEmail;