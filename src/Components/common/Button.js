import styled, { css } from 'styled-components';

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1.5vh;
    font-weight: bold;
    padding: 0.5vh 1vw;
    color: black;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    &:hover {
        background: lightslategray;
    }

    ${props =>
        props.gray &&
        css`
            background: #d9d9d9;
            &:hover {
                background: lightslategray;
                &:disabled {
                    background: #D9D9D9;
                    cursor: not-allowed;
                }
            }
        `
    }
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const Button = props => {
    return (
        <StyledButton {...props} />
    );
};

export default Button;