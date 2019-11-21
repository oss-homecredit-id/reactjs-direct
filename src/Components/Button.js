import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../assets/mixins/mixins";

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.variant === "filled"
      ? colors.mainRed
      : props.variant === "nude"
      ? colors.mainWhite
      : colors.mainRed};

  background: ${props => (props.disabled ? colors.disabledGrey : "")};
  padding: ${props =>
    props.size === "tiny"
      ? "5px 8px"
      : props.size === "sm"
      ? "10px 20px"
      : props.size === "md"
      ? "15px 30px"
      : props.size === "lg"
      ? "20px 40px"
      : "10px 20px"};
  font-size: ${props =>
    props.size === "tiny"
      ? "10px"
      : props.size === "sm"
      ? "12px"
      : props.size === "md"
      ? "14px"
      : props.size === "lg"
      ? "16px"
      : "12px"};
  margin: 5px;
  color: ${props =>
    props.variant === "filled"
      ? colors.mainWhite
      : props.variant === "nude"
      ? colors.mainRed
      : colors.mainWhite};
  display: inline-flex;
  box-shadow: ${props =>
    props.variant === "nude"
      ? "10px 10px 19px -8px rgba(155,155,155,0.75)"
      : "none"};
  border-radius: ${props => (props.type === "rounded" ? "20px" : "8px")};
  border: none;
  &:hover,
  &:active,
  &:focus {
    background: ${props =>
      props.variant === "nude"
        ? colors.mainWhite
        : props.disabled
        ? colors.disabledGrey
        : colors.clickedRed};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    outline: 0;
  }
`;

export const Button = ({ variant, type, size, disabled, ...props }) => {
  return (
    <ButtonStyle
      variant={variant}
      type={type}
      size={size}
      disabled={disabled}
      {...props}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

Button.defaultProps = {
  variant: "filled",
  type: "default",
  size: "md"
};
