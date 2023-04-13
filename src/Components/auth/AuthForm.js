import styled from "styled-components";
import Button from "../common/Button";
import useEmail from "../../utils/hooks/useEmail";
import usePassword from "../../utils/hooks/usePassword";

const AuthFormBlock = styled.div`
    .title {
        font-size: 1.2rem;
        text-align: center;
        margin: 0;
        color: black;
        margin-bottom: 1rem;
    }
    .input{
        display: flex;
        margin-top: 1.2rem;
        justify-content: right;
    }
    .subtitle{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        margin-right: 0.5rem;
        font-weight: bold;
        width: 7rem;
    }
`;

const StyledInput = styled.input`
        font-size: 1rem;
        border: none;
        padding: 0.5rem;
        outline: none;
        width: 100%;
        &:focus {
        border: 1px solid black;
    }
`;

const Register = styled.div`
    font-size: 0.85rem;
    margin-top: 1.5rem;
    text-align: center;
    a {
        color: black;
        text-decoration: underline;
        &:hover{
            color: lightslategray;
        }
    }
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

function AuthForm({type, onSubmit}) {

    const text = textMap[type];

    const {email, isValidatedEmail, onChangeValidatedEmail} = useEmail();
    const {password, isValidatedPassword, onChangeValidatedPassword} = usePassword();

    return (
        <AuthFormBlock>
            <div className="title">{text}</div>
            <form onSubmit={onSubmit}>
                <div className="input">
                    <div className="subtitle">E-mail</div>
                    <StyledInput
                        data-testid="email-input"
                        name="email"
                        placeholder="이메일을 입력해주세요"
                        value={email}
                        onChange={onChangeValidatedEmail}
                    />
                </div>
                <div className="input">
                    <div className="subtitle">PW</div>
                    <StyledInput
                        data-testid="password-input"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        type="password"
                        value={password}
                        onChange={onChangeValidatedPassword}
                    />
                </div>
                <Button
                    data-testid={type === 'register' ? "signup-button" : "signin-button"}
                    disabled={isValidatedEmail && isValidatedPassword ? false : true}
                >
                    {text}
                </Button>
            </form>
            <Register>
                {type === 'register' ? (
                    <a href="/signin">로그인</a>
                ) : (
                    <a href="/signup">회원가입</a>
                )}
            </Register>
        </AuthFormBlock>
    );
}

export default AuthForm;