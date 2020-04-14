import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "./Input";

export const Datepicker = ({
  dateFormat,
  selected,
  onChange,
  isDisabled,
  cy
}) => {
  const ref = React.createRef();

  return (
    <>
      <ReactDatePicker
        selected={selected}
        dateFormat={dateFormat ? dateFormat : "dd/MM/yyyy"}
        onChange={date => onChange(date)}
        customInput={
          <Input
            label="Date From"
            isDisabled={isDisabled ? true : false}
            type="date"
            ref={ref}
            cy={cy}
          />
        }
      />
    </>
  );
};
