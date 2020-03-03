import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { colors } from "../assets/mixins/mixins";
import { Input } from "./Input";
import { css } from "@emotion/core";

export const Select = props => {
  const { option, value, label, formLabel, selected } = props;

  const [selectedValue, setSelectedValue] = useState("Default Value");
  const [selectOpen, setSelectOpen] = useState(false);
  const [options, setOptions] = useState(option || []);

  useEffect(() => {
    setOptions(option);
  }, [props.option]);

  const openSelect = () => {
    setSelectOpen(!selectOpen);
  };

  const filterSelect = e => {
    const filterData = e.target.value;
    setSelectedValue(filterData);
    const filtered = option.filter(
      data => data.label.indexOf(filterData) !== -1
    );
    setOptions(filtered);
  };

  const handleClick = event => {
    const value = event.target.getAttribute("data-value");
    setSelectedValue(event.target.innerText);
    selected(value);
    setOptions(options);
    setSelectOpen(false);
  };

  const labelSelect = data => {
    const splitLabel = label.replace(/\s/g, "").split(",");
    if (Array.isArray(splitLabel) && splitLabel.length > 1) {
      let newLabel = "";
      for (let i = 0; i < splitLabel.length; i++) {
        newLabel += data[splitLabel[i]] + (i === 0 ? " - " : "");
      }
      return newLabel;
    }
    return data[splitLabel];
  };

  return (
    <React.Fragment>
      <Input
        type="select"
        name={formLabel}
        label={formLabel}
        value={selectedValue}
        selectOpen={selectOpen}
        onClick={openSelect}
        onChange={e => filterSelect(e)}
        role="button"
      />
      {selectOpen && (
        <div
          css={css`
            margin: 5px 0 15px 0;
            padding: 0;
            max-height: 11.5rem;
            overflow: auto;
          `}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {options.map((dataOption, index) => (
            <div
              css={css`
                padding: 0.8rem 1.8rem;
                background: ${colors.background}
                border-top: 1px solid ${colors.lighterBlack};
                border-bottom: 1px solid ${colors.lighterBlack};
                &:nth-first-of-type {
                  border-top: none;
                }
                &:nth-last-of-type {
                  border-bottom: none;
                }
              `}
              onClick={e => handleClick(e)}
              key={index}
              data-value={dataOption[value]}
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
            >
              {labelSelect(dataOption)}
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array.isRequired
};

Select.defaultProps = {
  value: "value",
  label: "label",
  options: []
};
