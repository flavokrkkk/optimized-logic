import React from "react";
import "./loading.styl";
import { ELoadingSizes } from "./types";

interface LoaderProps {
  size?: ELoadingSizes;
}

export const Loader: React.FC<LoaderProps> = ({ size = "small" }) => {
  return <div className={`loader loader-${size}`} />;
};
