import React, {useState} from 'react';

function MainPageFunc(props) {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Func component</h1>
            <div>
                <h5>{count}</h5>
                <button onClick={increment}> + </button>
                <button onClick={decrement}> - </button>
            </div>
        </div>
    );
}

export default MainPageFunc;