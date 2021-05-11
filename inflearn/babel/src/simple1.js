function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    return <button onClick={() => setLiked(!liked)}>{text}</button>
}

function Container() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <LikeButton />
            <div>
                <span>현재 카운트: </span>
                <span style={{marginRight: 10}}>{count}</span>
                <button onClick={() => setCount(count+1)}>증가</button>
                <button onClick={() => setCount(count-1)}>감소</button>
            </div>
        </div>
    );
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);