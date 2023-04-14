import styled from "styled-components";

const TodoListBlock = styled.li`
    width:30rem;
    height: 30rem;
    list-style: none;
`

function TodoList({children}) {
    return (
        <TodoListBlock>
            {children}
        </TodoListBlock>
    );
}

export default TodoList;