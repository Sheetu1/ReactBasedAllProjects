import { useContext } from 'react'
import { CounterContext } from '../Context/Counter'
import React from 'react'

const Count = () => {
    const counterState = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => counterState.setCount(counterState.count + 1)}>Increment</button>
            <button onClick={() => counterState.setCount(counterState.count - 1)}>Decrement</button>
        </div>
    )
}

export default Count
