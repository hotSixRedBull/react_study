import React, { useState, useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    function onClick() {
        //2번 호출해도 count는 1만 올라간다.
        setCount(count + 1);
        setCount(count + 1);

        //아래처럼 처리하면 2번 올라갈 수 있다.
        //setCount(v => v + 1);
        //setCount(v => v + 1);
    }
    console.log('render called');
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onClick}>증가</button>
        </div>
    );
}