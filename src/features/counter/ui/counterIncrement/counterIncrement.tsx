import { Button, EButtonSizes } from "@/shared";
import { useCounter } from "../../hooks/useCounter";

const CounterIncrement = () => {
  const { handleIncrement } = useCounter();
  return (
    <Button size={EButtonSizes.MEDIUM} label="+" onClick={handleIncrement} />
  );
};

export default CounterIncrement;
