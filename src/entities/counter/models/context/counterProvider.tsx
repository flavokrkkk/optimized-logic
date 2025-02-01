import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { CounterContext } from "./counterContext";

export const CounterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => setCounter((prev) => prev + 1), []);
  const handleDecrement = useCallback(() => setCounter((prev) => prev - 1), []);

  const counterValues = useMemo(
    () => ({ counter, handleIncrement, handleDecrement }),
    [counter, handleIncrement, handleDecrement]
  );

  return (
    <CounterContext.Provider value={counterValues}>
      {children}
    </CounterContext.Provider>
  );
};
