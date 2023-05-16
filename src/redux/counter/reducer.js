export default function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + (action.payload ?? 1) };
    case "DECREMENT":
      return { count: state.count - (action.payload ?? 1) };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
