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
  tabIndex,
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
    customRadio: {
      borderRadius: "100%",
      height: "13px",
      width: "13px",
      margin: "5px",
      position: "relative"
    },
    label: {
      margin: "-2px 5px 0px 5px",
      fontSize: "0.8rem"
    }
  };

  const radioChange = event => {
    setSelected(event.currentTarget.value);
  };

  const optionsValidate = option.length < 5 && option.length > 1;

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
                  style={styles.customRadio}
                  className={
                    radioSelected === option[value] ? "check" : "uncheck"
                  }
                ></div>
                <input
                  style={styles.input}
                  type="radio"
                  value={option[value]}
                  checked={radioSelected === option[value]}
                  onChange={event => radioChange(event)}
                  name={name}
                  tabIndex={
                    tabIndex ? (index === 0 ? tabIndex : undefined) : undefined
                  }
                  data-cy={cy + `_` + index}
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
          width: 14px;
          height: 14px;
          border: 1px solid #7b7b7b;
          border-radius: 100%;
          background: transparent;
          margin: -2.5px -2px;
        }
        .check::before {
          content: "";
          position: absolute;
          width: 14px;
          height: 14px;
          border: 1px solid #e11931;
          border-radius: 100%;
          background: #fce8ea;
          margin: -2.5px;
        }
        .check::after {
          content: "";
          width: 8px;
          height: 8px;
          background: #e11931;
          position: absolute;
          border-radius: 100%;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;
          margin: 1.5px;
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
