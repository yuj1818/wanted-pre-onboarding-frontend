import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width:30rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    overflow: hidden;

    .content {
        background: white;
    }
`;

function TodoTemplate({children}) {
    return (
        <TodoTemplateBlock>
            <div className="content">{children}</div>
        </TodoTemplateBlock>
    );
}

export default TodoTemplate;