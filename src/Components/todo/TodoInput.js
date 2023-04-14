import styled from "styled-components";

const TodoInputBlock = styled.div`
    background: #495057;
    form {
        display:flex;
    }
    input {
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
        color: white;
        flex: 1;
    }
    button {
        background: none;
        outline: none;
        border: none;
        background: #868e96;
        color: white;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-left: auto;

        &:hover {
            background: #adb5bd;
        }
    }
`;

function TodoInput({onClickInsert, inputRef}) {
    return (
        <TodoInputBlock>
            <form>
                <input 
                    data-testid="new-todo-input" 
                    ref={inputRef}
                />
                <button 
                    data-testid="new-todo-add-button" 
                    type="submit"
                    onClick={onClickInsert}
                >
                    추가
                </button>
            </form>
        </TodoInputBlock>
    )
}

export default TodoInput;