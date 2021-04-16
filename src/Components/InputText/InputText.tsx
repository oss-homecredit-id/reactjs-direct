import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  CSSProperties
} from "react";
import { MasterInput } from "../MasterInput/MasterInput";
import styles from "./InputText.module.css";

export interface IInputText {
  label: string;
  id: string;
  value: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  errorText?: string;
  helperText?: string;
  disabled?: boolean | false;
  readonly?: boolean | false;
  maxlength?: number;
  required?: boolean | false;
  tabindex?: number;
  style?: CSSProperties;
}

export const InputText: FC<IInputText> = props => {
  const {
    label,
    id,
    value,
    placeholder,
    onChange,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onBlur,
    errorText,
    helperText,
    disabled,
    readonly,
    maxlength,
    required,
    tabindex,
    style
  } = props;
  return (
    <>
      <MasterInput
        type="text"
        label={label}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        errorText={errorText}
        helperText={helperText}
        disabled={disabled}
        readonly={readonly}
        maxlength={maxlength}
        required={required}
        tabindex={tabindex}
        style={style}
      />
    </>
  );
};
