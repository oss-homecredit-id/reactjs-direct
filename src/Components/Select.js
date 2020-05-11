import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { colors } from "../assets/mixins/mixins";
import { Input } from "./Input";
import { css } from "@emotion/core";

export const Select = props => {
  const wrapperRef = useRef(null);
  const {
    option,
    value,
    label,
    formLabel,
    disabled,
    selected,
    ppCommodity,
    ppManufacture,
    selectedLabel,
    tabIndex,
    placeholder,
    cy
  } = props;

  const [selectedValue, setSelectedValue] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [options, setOptions] = useState(option || []);

  useEffect(() => {
    setOptions(option);
  }, [props.option]);

  useEffect(() => {
    if (selectedLabel) {
      handleSelectedProps();
    }
  }, [props.selectedLabel]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const openSelect = () => {
    if (!selectOpen) {
      setSelectedValue("");
    } else {
      setSelectedValue("");
      setOptions(option);
    }
    setSelectedValue("");
    setSelectOpen(!selectOpen);
  };

  const filterSelect = e => {
    const filterData = e.target.value;
    setSelectedValue(filterData);
    const filtered = option.filter(data => {
      if (ppCommodity || ppManufacture) {
        if (ppCommodity) {
          return (
            data.name.localizedString[0].text
              .toLowerCase()
              .indexOf(filterData) !== -1
          );
        } else if (ppManufacture) {
          return data.manufacturer[0].toLowerCase().indexOf(filterData) !== -1;
        }
      }
      const getLabel = label.replace(/\s/g, "").split(",");
      if (getLabel.length > 1) {
        return data[getLabel[1]].toLowerCase().indexOf(filterData) !== -1;
      }
      return data.label.toLowerCase().indexOf(filterData) !== -1;
    });
    setOptions(filtered);
  };

  const handleClick = event => {
    const value = event.target.getAttribute("data-value");
    setSelectedValue(event.target.innerText);
    selected(value);
    setOptions(option);
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

  const handleSelectedProps = () => {
    const getDataSelected = option.find(data => data[value] === selectedLabel);
    if (!!getDataSelected) {
      if (ppCommodity) {
        setSelectedValue(getDataSelected.name.localizedString[0].text || "");
      } else {
        const labelWithProps = labelSelect(getDataSelected);
        setSelectedValue(labelWithProps);
      }
    } else {
      setSelectedValue(selectedLabel);
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && e.keyCode === 13) {
      openSelect();
    }

    return false;
  };

  return (
    <div
      css={css`
        position: relative;
        text-align: left;
      `}
      ref={wrapperRef}
    >
      <Input
        type="select"
        name={formLabel}
        label={formLabel}
        value={selectedValue}
        selectOpen={selectOpen}
        onClick={openSelect}
        onKeyDown={e => handleKeyDown(e)}
        onChange={e => filterSelect(e)}
        isDisabled={disabled}
        role="button"
        tabIndex={tabIndex ? tabIndex : undefined}
        placeholder={placeholder}
        cy={cy}
      />
      {selectOpen && (
        <div
          css={css`
            margin: 5px 0 15px 0;
            padding: 0;
            max-height: 11.5rem;
            overflow: auto;
            background: ${colors.background};
            position: absolute;
            top: 2.5rem;
            z-index: 2;
            min-width: 100%;
            width: 100%;
            font-size: 0.8rem;
          `}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {options.map((dataOption, index) => (
            <div
              css={css`
                padding: 0.8rem 1rem;
                border-top: 1px solid ${colors.lighterBlack};
                border-bottom: 1px solid ${colors.lighterBlack};
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                &:nth-first-of-type {
                  border-top: none;
                }
                &:nth-last-of-type {
                  border-bottom: none;
                }
                &:hover,
                &:active,
                &:focus {
                  background: ${colors.lighterRed};
                }
              `}
              onClick={e => handleClick(e)}
              key={index}
              data-value={
                ppManufacture ? dataOption.manufacturer[0] : dataOption[value]
              }
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
              data-cy={`select_option_` + cy + `_` + index}
            >
              {ppCommodity
                ? dataOption.name.localizedString[0].text || ""
                : ppManufacture
                ? dataOption.manufacturer[0] || ""
                : labelSelect(dataOption)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  option: PropTypes.array.isRequired
};

Select.defaultProps = {
  value: "value",
  label: "label",
  option: []
};
