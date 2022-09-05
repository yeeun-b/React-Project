import React from "react";
import {useState, useRef, useCallback} from "react";
import './Todolist.css';
import TodoInsert from './TodoInsert'; // 할 일 추가하는 페이지
import TodoListList from "./TodoListList"; // 할 일 목록

const TodoList = () => {
    const [todos, setTodos] = useState([
        // 할 일 목록
        // 배열이 props로 전달됨
        {
            id: 1,
            text: '할일 1',
            checked: true,
        },
        {
            id: 2,
            text: '할일 2',
            checked: true,
        },
        {
            id: 3,
            text: '할일 3',
            checked: false,
        },
    ]);

    // 고유값으로 사용될 id
    const nextId = useRef(4);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked:false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1; // nextId를 1씩 더하기
        },
        [todos],
    );

    return (
        <div className="TodoTemplate">
            <div className="Todo-title">TodoList</div>
            {/* <div className="content"> */}
            <TodoInsert onInsert={onInsert}/> {/* 할 일 추가하는 페이지 */}
            <TodoListList todos={todos}/> {/* 리스트 출력하는 페이지 */}
            {/* </div> */}
        </div>
    );
};

export default TodoList;