import React, { useEffect, useState } from "react";

export const Radio = ({ options, name, radioType, selected, setSelected }) => {
  const list = radioType === "list";
  const [option, setOption] = useState([]);

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
      padding: "10px",
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
      margin: list ? "10px" : "0 10px",
      border: "1px solid #E11931",
      padding: "10px",
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

  return (
    <div style={styles.radioContainer}>
      {option
        ? optionsValidate
          ? option.map((option, index) => (
              <label
                style={
                  selected === option ? styles.optionChecked : styles.option
                }
                key={index}
              >
                <div
                  style={selected === option ? styles.check : styles.uncheck}
                ></div>
                <input
                  style={styles.input}
                  type="radio"
                  value={option}
                  checked={selected}
                  onChange={event => radioChange(event)}
                  name={name}
                ></input>
                <span style={styles.label}>{option} </span>
              </label>
            ))
          : ""
        : console.log("nada")}
    </div>
  );
};
