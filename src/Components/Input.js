import React, { forwardRef } from "react";
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
          font-size: 0.75rem;
          color: ${isDisabled ? colors.secondaryBlack : ""};
        `}
      >
        {label}
      </label>
      <input
        css={css`
          display: block;
          width: 100%;
          height: 40px;
          padding: 2px 8px;
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
        type={type === "select" || type === "date" ? "text" : type}
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
            position: absolute;
            right: 10px;
            bottom: 5px;
          `}
        >
          {type === "password" && <img src={password} alt="hide" />}
          {type === "date" && (
            <img
              style={{ width: "20px", height: "20px" }}
              src={datepicker}
              alt="hide"
            />
          )}
          {type === "select" && !selectOpen && <img src={down} alt="hide" />}
          {type === "select" && selectOpen && <img src={up} alt="hide" />}
        </span>
      )}
      {helper && !isError && (
        <small
          css={css`
            color: ${colors.primaryOrange};
          `}
        >
          {helper}
        </small>
      )}
      {isError && (
        <small
          css={css`
            color: ${isError ? colors.primaryRed : colors.primaryOrange};
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
