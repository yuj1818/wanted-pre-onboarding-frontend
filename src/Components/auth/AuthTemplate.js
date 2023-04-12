import styled from "styled-components";

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InfoBox = styled.div`
    box-shadow: 0 0 8px rgba(217, 217, 217, 0.8);
    padding: 2rem;
    width: 360px;
    background: rgba(217, 217, 217, 0.49);
    border-radius: 2px;
`;

function AuthTemplate({children}) {
    return (
        <AuthTemplateBlock>
            <InfoBox>
                {children}
            </InfoBox>
        </AuthTemplateBlock>
    );
}

export default AuthTemplate;