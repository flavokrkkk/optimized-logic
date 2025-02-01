import React, { useMemo } from "react";
import clsx from "clsx";
import "./counter.styl";
import { CounterSize, ECounterVariants } from "./types";

type CounterProps = {
  style: ECounterVariants;
  size: CounterSize;
  stroke: boolean;
  quantity: string | number;
  pulse?: boolean;
};

const Counter: React.FC<CounterProps> = ({
  style,
  size,
  stroke,
  quantity,
  pulse,
}) => {
  const { displayQuantity } = useMemo(() => {
    const maxLength = 3;
    let displayQuantity = String(quantity);
    if (typeof quantity === "number" && quantity > 99) {
      displayQuantity = "99+";
    } else if (displayQuantity.length > maxLength) {
      displayQuantity = displayQuantity.slice(0, maxLength);
    }

    return { displayQuantity };
  }, [quantity]);

  const circleClass = clsx("counter", style, {
    [`size-${size}`]: true,
    stroke: stroke,
    pulse: pulse && (size === 8 || size === 12),
  });

  return (
    <div className={circleClass}>
      {size > 12 ? (
        <span className="counter-quantity">{displayQuantity}</span>
      ) : null}
    </div>
  );
};

export default Counter;
