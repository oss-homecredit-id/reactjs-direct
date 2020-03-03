import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Radio = ({
  options,
  name,
  label,
  value,
  radioType,
  selected,
  setSelected
}) => {
  const list = radioType === "list";
  const [option, setOption] = useState([]);
  const [radioSelected, setRadioSelected] = useState(selected);

  const styles = {
    radioContainer: {
      display: "flex",
      flexDirection: list ? "column" : "row"
    },
    option: {
      width: "100%",
      margin: list ? "10px 5px" : "0 10px",
      border: "1px solid #B3B3B3",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "unset",
      color: "#9f9f9f",
      fontWeight: "unset",
      cursor: "pointer",
      borderRadius: "3px"
    },
    optionChecked: {
      width: "100%",
      margin: list ? "10px 0" : "0 10px",
      border: "1px solid #E11931",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(225,25,49,0.1)",
      color: "black",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "3px"
    },
    input: {
      position: "absolute",
      opacity: "0",
      cursor: "pointer",
      width: "auto",
      height: "5%"
    },
    check: {
      borderRadius: "100%",
      border: "4px solid #E11931",
      height: "13px",
      width: "13px",
      margin: "5px"
    },
    uncheck: {
      borderRadius: "100%",
      border: "1px solid black",
      height: "10px",
      width: "10px",
      margin: "5px"
    },
    label: {
      margin: "-2px 5px 0px 5px",
      fontSize: "0.8rem"
    }
  };

  const radioChange = event => {
    setSelected(event.currentTarget.value);
  };

  const optionsValidate = option.length < 4 && option.length > 1;

  useEffect(() => {
    setOption(options);
  }, [options]);

  useEffect(() => {
    setRadioSelected(selected);
  }, [selected]);

  return (
    <div style={styles.radioContainer}>
      {option
        ? optionsValidate
          ? option.map((option, index) => (
              <label
                style={
                  radioSelected === option[value]
                    ? styles.optionChecked
                    : styles.option
                }
                key={index}
              >
                <div
                  style={
                    radioSelected === option[value]
                      ? styles.check
                      : styles.uncheck
                  }
                ></div>
                <input
                  style={styles.input}
                  type="radio"
                  value={option[value]}
                  checked={radioSelected === option[value]}
                  onChange={event => radioChange(event)}
                  name={name}
                ></input>
                <span style={styles.label}>{option[label]}</span>
              </label>
            ))
          : ""
        : console.log("nada")}
    </div>
  );
};

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  radioType: PropTypes.string.isRequired
};

Radio.defaultProps = {
  value: "value",
  label: "label",
  radioType: "row"
};
