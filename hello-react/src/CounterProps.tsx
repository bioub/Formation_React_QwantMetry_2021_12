interface Props {
  count: number;
  setCount: (newCount: number) => void;
}

function CounterProps(props: Props) {
  return (
    <button className="CounterProps" onClick={() => props.setCount(props.count + 1)}>
      {props.count}
    </button>
  );
}

export default CounterProps;
