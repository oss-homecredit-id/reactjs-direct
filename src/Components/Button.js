import React from "react";

const ButtonHC = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export { ButtonHC };
