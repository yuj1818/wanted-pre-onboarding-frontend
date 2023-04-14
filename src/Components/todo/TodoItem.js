import styled from "styled-components";
import { useState, useRef } from "react";
import TodoEdit from "./TodoEdit";
import { updateTodos, deleteTodos } from "../../lib/api";

const TodoItemBlock = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    input {
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .text {
            margin-left: 0.5rem;
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
    .content {
        width: 100%;
        display: flex;
        gap: 0.5rem;
    }
`

function TodoItem({content, isCompleted, id, getData}) {

    const [isEdit, setIsEdit] = useState(false);

    const editedInputRef = useRef();

    const onEditToggle = () => {
        setIsEdit(!isEdit);
    };

    const onClickSubmit = async (e) => {
        e.preventDefault();

        const currentInput = editedInputRef.current.value;
        
        if (currentInput.length === 0) return;

        await updateTodos({id:id, todo:currentInput, isCompleted:isCompleted});
        
        getData();

        setIsEdit(!isEdit);
    };

    const onToggle = async (e) => {
        await updateTodos({id:id, todo:content, isCompleted:!isCompleted});
        
        getData();
    };

    const onDelete = async (e) => {
        await deleteTodos(id);
        
        getData();
    };

    return(
        <TodoItemBlock>
            <input 
                type="checkbox"
                checked={isCompleted}
                onChange={onToggle}
            />
            {isEdit?
                <TodoEdit 
                    initialValue={content}
                    onEditToggle={onEditToggle}
                    id={id}
                    inputRef={editedInputRef}
                    onClickSubmit={onClickSubmit}
                    onDelete={onDelete}
                />
                :
                <div className="content">
                    <div className="text">{content}</div>
                    <div className="buttons">
                        <button data-testid="modify-button" onClick={onEditToggle}>수정</button>
                        <button data-testid="delete-button" onClick={onDelete}>삭제</button>
                    </div>
                </div>
            }
        </TodoItemBlock>
    );
}

export default TodoItem;