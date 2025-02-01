import React from "react";
import "./Title.styl";
import clsx from "clsx";
import { EAlignVariants, ETitleVariants } from "./types";

interface TitleProps {
  text: string;
  variant?: ETitleVariants;
  align?: EAlignVariants;
}

export const Title: React.FC<TitleProps> = ({
  text,
  variant = ETitleVariants.H1,
  align = EAlignVariants.LEFT,
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return <Tag className={clsx("title", variant, align)}>{text}</Tag>;
};
