export type CounterState = {
  counter: number;
};

export type CounterAction = {
  handleIncrement: () => void;
  handleDecrement: () => void;
};
