import styled from "styled-components";

const TodoEditBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
        flex: 1;
    }
    .buttons {
        margin-left: auto;
    }
    button {
        font-size: 1rem;
        cursor: pointer;

        &:hover {
            color: #ff8787;
        }
    }
`

function TodoEdit({onEditToggle, initialValue, id, inputRef, onClickSubmit}) {
    return(
        <TodoEditBlock>
            <input 
                data-testid="modify-input"
                defaultValue={initialValue}
                ref={inputRef}
            />
            <div className="buttons">
                <button id={id} data-testid="submit-button" onClick={onClickSubmit}>제출</button>
                <button data-testid="cancel-button" onClick={onEditToggle}>취소</button>
            </div>
        </TodoEditBlock>
    );
}

export default TodoEdit;