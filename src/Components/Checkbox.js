import React from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../assets/mixins/mixins";

export const Checkbox = ({
  name,
  options,
  disabled,
  checked,
  setChecked,
  tabIndex,
  cy
}) => {
  const handleChange = e => {
    if (options.length > 1) {
      const a = document.querySelectorAll(`[name=${name}]:checked`);
      const b = [];
      a.forEach(element => b.push(element.value));
      setChecked(b);
    } else {
      const a = document.querySelector(`[name=${name}]:checked`);
      if (a === null) {
        setChecked(a);
      } else {
        setChecked(a.value);
      }
    }
  };

  return (
    <div>
      {options.map((options, key) => {
        return (
          <label
            key={key}
            className="checkbox-container"
            css={css`
              display: block;
              position: relative;
              padding-left: 35px;
              margin-bottom: 12px;
              cursor: pointer;
              color: ${options.disabled
                ? colors.secondaryBlack
                : colors.darkerBlack};
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              .checkmark:after {
                left: 8px;
                top: 4px;
                width: 7px;
                height: 12px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
              }
              &:hover {
                cursor: ${options.disabled ? "not-allowed" : "pointer"};
              }
            `}
          >
            {options.label}
            <input
              disabled={options.disabled ? true : false}
              type="checkbox"
              name={name}
              value={options.value}
              checked={checked}
              onChange={e => handleChange(e)}
              tabIndex={
                tabIndex ? (index === 0 ? tabIndex : undefined) : undefined
              }
              data-cy={cy + `_` + index}
              css={css`
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
                &:checked ~ .checkmark {
                  background-color: ${colors.primaryRed};
                  border-color: ${colors.primaryRed};
                }
                &:checked ~ .checkmark:after {
                  display: block;
                }
              `}
            ></input>
            <span
              className="checkmark"
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: ${options.disabled
                  ? colors.lighterBlack
                  : colors.mainWhite};
                border: solid 1px
                  ${options.disabled
                    ? colors.secondaryBlack
                    : colors.primaryRed};
                border-radius: 3px;
                &:after {
                  content: "";
                  position: absolute;
                  display: none;
                }
              `}
            ></span>
          </label>
        );
      })}
    </div>
  );
};
