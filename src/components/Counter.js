import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import '../components/Counter.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={() => dispatch(decrement())}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
