import { decrement, increment, reset } from "@/redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";

function Button({ children, onClick }) {
  return (
    <button className="p-2 bg-zerf-contrast text-white rounded hover:bg-opacity-90 transition" onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <p className="text-lg">Count: {count}</p>
      <div className="flex gap-4 items-center w-full justify-center max-w-2xl">
        <Button onClick={() => dispatch(decrement(5))}>Decrement -5</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement -1</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        <Button onClick={() => dispatch(increment())}>Increment +1</Button>
        <Button onClick={() => dispatch(increment(5))}>Increment +5</Button>
      </div>
    </>
  );
}
