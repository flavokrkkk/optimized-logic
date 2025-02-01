import { Button, EButtonSizes } from "@/shared";
import { useCounter } from "../../hooks/useCounter";

const CounterLabel = () => {
  const { counter } = useCounter();
  return (
    <Button label="Counter" size={EButtonSizes.MEDIUM} counter={counter} />
  );
};

export default CounterLabel;
