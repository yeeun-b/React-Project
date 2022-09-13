import React from "react";
import {useState, useRef, useCallback} from "react";
import './TodoList.css';
import TodoInsert from './TodoInsert'; // 할 일 추가하는 페이지
import TodoListList from "./TodoListList"; // 할 일 목록
import TodoEdit from "./TodoEdit"; // 할 일 수정하기

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

    // 체크박스에 체크하는 기능
    const onToggle = useCallback(
        id => {
            setTodos(
                // map()을 이용해 todo의 id가 인자로 받은 id와 같다면
                // 기존 객체를 복사해와서 기존 id와 text 정보는 유지하고 checked 상태만 변경
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                    ),
            );
        },
        [todos],
    );

    // 지우기 기능
    const onRemove = useCallback(
        id => { // 같은 id를 가진 항목을 배열에서 지움
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    );

    // 고유값으로 사용될 id
    const nextId = useRef(4); // 기본값이 3개 들어가 있으니 초기값을 4로 설정

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

    // 클릭한 항목의 todo 객체를 가져올 때 사용
    const [selectedTodo, setSelectedTodo] = useState(null);
    // 수정 창 보여주는 기능
    const [insertToggle, setInsertToggle] = useState(false);
    // 일정 클릭했을 때 insertToggle이 true로 바뀌는 함수
    const onInsertToggle = () => {
        if (selectedTodo){
            setSelectedTodo(null);
        }
        setInsertToggle((prev) => !prev);
    };
    // 수정 버튼 눌렀을 때 onClick으로 넣어줄 함수
    const onChangeSelectedTodo = (todo) => {
        setSelectedTodo(todo);
    };

    // 텍스트 변경
    const onUpdate = (id, text) => {
        onInsertToggle(); // 수정 창 꺼주는 역할
        // map() -> 각 todo의 id가 인자로 받은 id와 동일할 경우
        // 기존 id와 checked는 유지하고 text만 업데이트 해주기
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text} : todo)));
    }

    return (
        <div className="TodoTemplate">
            <div className="Todo-title">TodoList</div>
            {/* <div className="content"> */}
            <TodoInsert onInsert={onInsert}/> {/* 할 일 추가하는 페이지 */}
            <TodoListList todos={todos} onRemove={onRemove} onToggle={onToggle}
            onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo}/> {/* 리스트 출력하는 페이지 */}
            {insertToggle && (
                <TodoEdit onInsert={onInsert} insertToggle={insertToggle} selectedTodo={selectedTodo}
                onUpdate={onUpdate}/>
            )}
            {/* </div> */}
        </div>
    );
};

export default TodoList;