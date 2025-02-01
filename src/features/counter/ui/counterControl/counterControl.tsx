import { CounterProvider } from "@/entities";
import "../../styles/counter.styl";
import CounterLabel from "../counterLabel/counterLabel";
import CounterIncrement from "../counterIncrement/counterIncrement";
import CounterDecrement from "../counterDecrement/counterDecrement";

const CounterControl = () => {
  return (
    <CounterProvider>
      <div className="counter-container">
        <CounterLabel />
        <CounterIncrement />
        <CounterDecrement />
      </div>
    </CounterProvider>
  );
};

export default CounterControl;
