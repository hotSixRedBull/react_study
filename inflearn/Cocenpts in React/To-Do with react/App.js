import React, { useState } from 'react';

export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [currentId, setCurrentId] = useState(1);
    const [desc, setDesc] = useState('');
    function onAdd() {
        const todo = { id: currentId, desc };
        setCurrentId(currentId+1);
        setDesc([...todoList, todo]);
    }
    function onDelete(e) {
        const id = Number(e.target.dataset.id);
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    }
    function onSaveToServer() {}
    return (
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onclick={onDelete}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
            <input type="text" value={''} onChange={e => {}}></input>
            <button onClick={onAdd}>추가</button>
            <button onClick={onSaveToServer}>서버에 저장</button>
        </div>
    );
}