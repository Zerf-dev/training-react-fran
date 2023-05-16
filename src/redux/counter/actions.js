export function increment(value = 1) {
  return { type: "INCREMENT", payload: value }
}

export function decrement(value = 1) {
  return { type: "DECREMENT", payload: value }
}

export function reset() {
  return { type: "RESET" }
}