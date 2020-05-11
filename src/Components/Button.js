import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../assets/mixins/mixins";

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.disabled
      ? colors.secondaryBlack
      : props.variant === "primary"
      ? colors.primaryRed
      : props.variant === "secondary"
      ? colors.mainWhite
      : props.variant === "text"
      ? "transparent"
      : colors.primaryRed};
  padding: 10px 20px;
  outline: none;
  margin: 5px;
  font-size: 1rem;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  color: ${props =>
    props.disabled
      ? colors.mainWhite
      : props.variant === "primary"
      ? colors.mainWhite
      : props.variant === "secondary"
      ? colors.primaryRed
      : props.variant === "text"
      ? colors.primaryRed
      : colors.mainWhite};
  display: inline-flex;
  border-radius: 8px;
  justify-content: center;

  border: ${props =>
    props.variant === "secondary" ? "1px solid colors.primaryRed" : "none"};
  border-color: ${props =>
    props.disabled
      ? colors.secondaryBlack
      : props.variant === "primary"
      ? colors.primaryRed
      : props.variant === "secondary"
      ? colors.primaryRed
      : "transparent"};
  &:hover,
  &:active,
  &:focus {
    background: ${props =>
      props.disabled
        ? colors.secondaryBlack
        : props.variant === "secondary"
        ? colors.mainWhite
        : props.variant === "text"
        ? "unset"
        : colors.primaryRed};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    outline: 0;
  }
`;

export const Button = ({ variant, disabled, cy, ...props }) => {
  return (
    <React.Fragment>
      <ButtonStyle
        variant={variant}
        disabled={disabled}
        style={props.styleConfig}
        onClick={props.onClick}
        tabIndex={props.tabIndex ? props.tabIndex : undefined}
        data-cy={cy}
        {...props}
      />
    </React.Fragment>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired
};

Button.defaultProps = {
  variant: "primary"
};
