import React, { useState } from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
   
function Counter() {
    const [count, setCount] = useState(0);
    return (
    <div>
    <h1>Hello,React</h1>
    <h1>My name is Worawan Deesombat</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    );
 }
 export default Counter;