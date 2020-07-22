import React, { FC, MouseEvent, CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";

export interface IButton {
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "teritary";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  tabindex?: number;
  size?: string;
  color?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Button: FC<IButton> = props => {
  const {
    type,
    variant,
    onClick,
    disabled,
    tabindex,
    size,
    color,
    style,
    children
  } = props;
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        style={style}
        onClick={onClick}
        tabIndex={tabindex}
        className={`
          ${styles.ds_button}
          ${
            variant === "secondary"
              ? styles.ds_secondary_button
              : variant === "teritary"
              ? styles.ds_teritary_button
              : styles.ds_primary_button
          }
          ${disabled ? styles.ds_button_disabled : ""}
          ${size === "full" ? styles.ds_full_button : ""}
        `}
      >
        <span style={{ color: `${color}` }}>{children}</span>
      </button>
    </>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  size: "half"
};
