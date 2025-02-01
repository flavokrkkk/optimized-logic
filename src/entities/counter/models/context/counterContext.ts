import { createContext } from "react";
import { CounterAction, CounterState } from "../types";

export const CounterContext = createContext<CounterState & CounterAction>({
  counter: 0,
  handleIncrement: () => {},
  handleDecrement: () => {},
});
