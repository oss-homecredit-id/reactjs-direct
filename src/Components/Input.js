import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { colors } from "../assets/mixins/mixins";
import down from "../assets/chevron_down.png";
import up from "../assets/chevron_top.png";
import password from "../assets/password_icon.png";
import datepicker from "../assets/date-picker_icon.png";

export const Input = forwardRef((props, ref) => {
  const {
    label,
    type,
    name,
    value,
    onChange,
    onClick,
    isError,
    helper,
    placeholder,
    selectOpen,
    isDisabled,
    readOnly,
    maxlength,
    required
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const iconStyle = {
    width: "1rem",
    height: "auto",
    verticalAlign: "middle"
  };

  const clickPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 15px;
      `}
      style={type === "select" ? { margin: 0 } : {}}
    >
      {/* change conditional style with emotion */}
      <label
        css={css`
          position: absolute;
          top: -2px;
          left: 0.5rem;
          font-size: 0.7rem;
          color: ${isDisabled ? colors.secondaryBlack : ""};
        `}
      >
        {label}
      </label>
      <input
        css={css`
          display: block;
          width: 100%;
          height: 45px;
          padding: ${
            type === "text" ? ".9rem .5rem 0 0.5rem" : ".9rem 1.8rem 0 .5rem"
          };
          font-size: 0.8rem;
          border: none;
          outline: none;
          color: ${isDisabled ? colors.secondaryBlack : colors.darkerBlack};
          border-bottom: ${
            isDisabled
              ? "1px solid" + colors.secondaryBlack
              : "1px solid  #7b7b7b"
          };
          border-color: ${isError ? colors.primaryRed : "none"};
          background-color: ${colors.background};
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          &:focus {
            border-bottom: ${
              isDisabled
                ? ""
                : isError
                ? "2px solid" + colors.primaryRed
                : "2px solid" + colors.darkerBlack
            };
          }
          &:active {
            border-bottom: border-bottom: ${
              isDisabled ? "" : "2px solid" + colors.darkerBlack
            };
          }
          &:hover {
            cursor: ${isDisabled ? "not-allowed" : ""};
          }
          
        `}
        type={
          type === "select" || type === "date"
            ? "text"
            : type === "password" && showPassword
            ? "text"
            : type
        }
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={type === "select" ? "off" : "on"}
        onChange={type === "date" && !isDisabled ? onClick : onChange}
        onClick={
          (type === "select" || type === "date") && !isDisabled
            ? onClick
            : undefined
        }
        disabled={isDisabled ? true : false}
        required={required}
        ref={ref}
        readOnly={readOnly ? true : false}
        maxLength={maxlength}
      />
      {type !== "text" && (
        <span
          css={css`
            position: relative;
            float: right;
            bottom: 1.5rem;
            right: 10px;
          `}
        >
          {type === "password" && (
            <img
              style={iconStyle}
              src={password}
              onClick={clickPassword}
              alt="hide"
            />
          )}
          {type === "date" && (
            <img style={iconStyle} src={datepicker} alt="hide" />
          )}
          {type === "select" && !selectOpen && (
            <img style={iconStyle} src={down} alt="hide" />
          )}
          {type === "select" && selectOpen && (
            <img style={iconStyle} src={up} alt="hide" />
          )}
        </span>
      )}
      {helper && !isError && (
        <small
          css={css`
            color: ${colors.primaryBlack};
            font-size: 60%;
          `}
        >
          {helper}
        </small>
      )}
      {isError && (
        <small
          css={css`
            color: ${isError ? colors.primaryOrange : colors.primaryBlack};
            font-size: 60%;
          `}
        >
          {isError}
        </small>
      )}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: "text"
};
