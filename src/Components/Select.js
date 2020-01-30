import React, { useState } from "react";
import PropTypes from "prop-types";
import { colors } from "../assets/mixins/mixins";
import { Input } from "./Input";
import { css } from "@emotion/core";

export const Select = props => {
  const { option, value, label, selected } = props;

  const [selectedValue, setSelectedValue] = useState("Default Value");
  const [selectOpen, setSelectOpen] = useState(false);
  const [options, setOptions] = useState(option || []);

  const openSelect = () => {
    setSelectOpen(!selectOpen);
  };

  const filterSelect = e => {
    const filterData = e.target.value;
    setSelectedValue(filterData);
    const filtered = options.filter(
      value => value.nameCategory.indexOf(filterData) !== -1
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

  return (
    <React.Fragment>
      <Input
        type="select"
        name="category"
        label="Category"
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
              {dataOption[label]}
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

Select.defaultProps = {
  value: "value",
  label: "label",
  options: []
};
