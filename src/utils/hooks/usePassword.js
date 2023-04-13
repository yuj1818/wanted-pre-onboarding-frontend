import { useState } from "react";

function usePassword() {
    const [password, setPassword] = useState("");
    const [isValidatedPassword, setIsValidatedPassword] = useState(false);
    
    const onChangePassword = (currentValue) => {
        setPassword(currentValue);
    };

    const validatePassword = (currentValue) => {
        if (currentValue.length >= 8) {
            setIsValidatedPassword(true);
        } else {
            setIsValidatedPassword(false);
        }
    };

    const onChangeValidatedPassword = e => {
        onChangePassword(e.target.value);
        validatePassword(e.target.value)
    }

    return {
        password,
        isValidatedPassword,
        onChangeValidatedPassword,
    };
}

export default usePassword;