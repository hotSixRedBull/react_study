import React, { useState } from 'react';
import Profile from './Profile';

export default function App() {
    const [userId, setUserId] = useState(0);
    return (
        <>
            <Profile userId={userId} />
            <button onClick={() => setUserId(userId + 1)}>userId 변경</button>
        </>
    );
}