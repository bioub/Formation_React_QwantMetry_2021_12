import { useState } from 'react';

function CounterState() {
  const [count, setCount] = useState(0);

  return (
    <button className="CounterState" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default CounterState;
