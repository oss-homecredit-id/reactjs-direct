import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Radio = ({
  options,
  name,
  label,
  value,
  radioType,
  selected,
  setSelected,
  cy
}) => {
  const list = radioType === "list";
  const [option, setOption] = useState([]);
  const [radioSelected, setRadioSelected] = useState(selected);

  const styles = {
    radioContainer: {
      display: "flex",
      flexDirection: list ? "column" : "row",
      margin: "10px"
    },
    option: {
      width: "100%",
      margin: list ? "10px" : "0 10px",
      border: "1px solid #B3B3B3",
      padding: "2px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "unset",
      color: "#9f9f9f",
      cursor: "pointer",
      borderRadius: "3px"
    },
    optionChecked: {
      width: "100%",
      margin: list ? "10px" : "0 10px",
      border: "1px solid #E11931",
      padding: "2px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(225,25,49,0.1)",
      color: "#e11931",
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
      height: "13px",
      width: "13px",
      margin: "5px"
    },
    uncheck: {
      borderRadius: "100%",
      height: "13px",
      width: "13px",
      margin: "5px"
    },
    label: {
      margin: "-2px 5px 0px 5px"
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
                  className={selected === option ? "check" : "uncheck"}
                ></div>
                <input
                  style={styles.input}
                  type="radio"
                  value={option[value]}
                  checked={radioSelected === option[value]}
                  onChange={event => radioChange(event)}
                  name={name}
                  data-cy={cy}
                ></input>
                <span style={styles.label}>{option[label]}</span>
              </label>
            ))
          : ""
        : console.log("nada")}
      <style jsx="true">{`
        .uncheck::before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          border: 1px solid #7b7b7b;
          border-radius: 100%;
          background: #d8d8d8;
          margin: -1.5px;
        }
        .check::before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          border: 1px solid #e11931;
          border-radius: 100%;
          background: #fce8ea;
          margin: -0.5px;
        }
        .check::after {
          content: "";
          width: 9px;
          height: 9px;
          background: #e11931;
          position: absolute;
          border-radius: 100%;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;
          margin: 2.5px;
        }
      `}</style>
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
