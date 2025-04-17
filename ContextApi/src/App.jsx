import React, { useContext } from 'react'
import Count from './Components/Count'
import { CounterContext } from './Context/Counter'

const App = () => {
  const CounterState = useContext(CounterContext);
  console.log('context', CounterState);           

  return (
    <div>
      <h1>Count is {CounterState.count}</h1>
      <Count />
      <Count />
      <Count />
      <Count />
    </div>
  )
}

export default App
