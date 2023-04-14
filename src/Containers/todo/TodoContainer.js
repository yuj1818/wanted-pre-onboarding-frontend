import React, { useRef } from "react";
import TodoTemplate from "../../Components/todo/TodoTemplate";
import TodoInput from "../../Components/todo/TodoInput";
import TodoItem from "../../Components/todo/TodoItem";
import TodoList from "../../Components/todo/TodoList";
import useRefreshData from "../../utils/hooks/useRefreshData";
import { createTodo } from "../../lib/api";

function TodoContainer() {

    const { todos, getData } = useRefreshData();

    const inputRef = useRef();

    const onClickInsert = async (e) => {
        e.preventDefault();

        const currentInput = inputRef.current.value;

        if (currentInput.length === 0) return;

        await createTodo(currentInput);

        getData();
        
        inputRef.current.value = "";
    };

    return (
        <TodoTemplate>
            <TodoInput
                onClickInsert={onClickInsert}
                inputRef={inputRef}
            />
            <TodoList>
                {todos &&
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            content={todo.todo}
                            isCompleted={todo.isCompleted}
                            getData={getData}
                        />
                    ))
                }
            </TodoList>
        </TodoTemplate>
    );
}

export default TodoContainer;