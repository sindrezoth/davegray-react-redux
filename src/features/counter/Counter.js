import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount || 0);

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section style={{background: "#aaaa00"}}>
      <h3>Counter</h3>
      <p>{counter}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <div>
        <button onClick={resetAll}>reset</button>
      </div>
      <div>
        <input value={incrementAmount} onChange={e=>setIncrementAmount(e.target.value)} />
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>increment by</button>

      </div>
    </section>
  )
}

export default Counter;
