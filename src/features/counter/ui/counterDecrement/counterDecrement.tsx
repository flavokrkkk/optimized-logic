import { Button, EButtonSizes } from "@/shared";
import { useCounter } from "../../hooks/useCounter";

const CounterDecrement = () => {
  const { handleDecrement } = useCounter();
  return (
    <Button size={EButtonSizes.MEDIUM} label="-" onClick={handleDecrement} />
  );
};

export default CounterDecrement;
