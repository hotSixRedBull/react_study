import React, { useRef, useEffect } from 'react';

export default function App() {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <InputAndSave inputRef={inputRef} />
            <Button ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
        </div>
    );
}

function InputAndSave({ inputRef }) {
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button> 저장 </button>
        </div>
    );
}

const Button = React.forwardRef(function ({ onClick }, ref) {
    return (
        <button onClick={onClick} ref={ref}>
            저장
        </button>
    );
})