function MyComponent() {
    const [value, setValue] = useState(0);
    // hook을 if문 안에서 사용 => X
    if (value === 0) {
        const [v1, setV1] = useState(0);
    }
    else {
        const [v2, setV2] = useState(0);
        const [v3, setV3] = useState(0);
    }
    // hook을 for문 안에서 사용 => X
    for (let i=0; i<value; i++) {
        const [num, setNum] = useState(0);
    }
    // 함수 안에서 사용 => X
    function func1() {
        const [num, setNum] = useState(0);
    }
}