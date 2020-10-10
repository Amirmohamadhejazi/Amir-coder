import React, {useState} from 'react';
export default function Home() {
    const [state, setstate] = useState(2);
    console.log(state)
    return (
        <button onClick={() => setstate(state + 1)}>
            Click me
        </button>
    )
}











