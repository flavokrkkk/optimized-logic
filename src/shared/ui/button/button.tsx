import React, { useState } from "react";
import "./button.styl";
import clsx from "clsx";
import { ButtonState, EButtonSizes, EButtonVariants } from "./types";
import { Loader } from "../loading/loading";
import Counter from "../counter/counter";
import { ECounterVariants } from "../counter/types";
import { ELoadingSizes } from "../loading/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: EButtonVariants;
  size?: EButtonSizes;
  state?: ButtonState;
  counter?: number;
  focused?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = EButtonVariants.PRIMARY,
  size = EButtonSizes.SMALL,
  state = "enabled",
  counter,
  focused = false,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleIsPressed = () => setIsPressed((prev) => !prev);

  return (
    <button
      className={clsx("btn", variant, size, state, {
        focused,
        pressed: isPressed,
      })}
      onMouseDown={handleIsPressed}
      onMouseUp={handleIsPressed}
      {...props}
    >
      {state === "loading" && <Loader size={ELoadingSizes.MEDIUM} />}
      {state !== "loading" && <span className="content-group">{label}</span>}
      {(counter || counter === 0) && state !== "loading" && (
        <Counter
          quantity={counter}
          size={16}
          stroke={false}
          style={ECounterVariants.PRIMARY}
        />
      )}
    </button>
  );
};
