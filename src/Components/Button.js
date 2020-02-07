import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../assets/mixins/mixins";

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.variant === "primary"
      ? colors.primaryRed
      : props.variant === "secondary"
      ? colors.mainWhite
      : props.variant === "text"
      ? "transparent"
      : props.isDisabled
      ? colors.secondaryBlack
      : colors.primaryRed};
  padding: 10px 20px;
  outline: none;
  margin: 5px;
  color: ${props =>
    props.variant === "primary"
      ? colors.mainWhite
      : props.variant === "secondary"
      ? colors.primaryRed
      : props.variant === "text"
      ? colors.primaryRed
      : colors.mainWhite};
  display: inline-flex;
  border-radius: 8px;
  border: none;
  &:hover,
  &:active,
  &:focus {
    background: ${props =>
      props.variant === "secondary"
        ? colors.mainWhite
        : props.isDisabled
        ? colors.secondaryBlack
        : props.variant === "text"
        ? "unset"
        : colors.primaryRed};
    cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
    outline: 0;
  }
`;

export const Button = ({ variant, isDisabled, ...props }) => {
  return (
    <React.Fragment>
      <ButtonStyle
        variant={variant}
        isDisabled={isDisabled}
        style={props.styleConfig}
        onClick={props.onClick}
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
