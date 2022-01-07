import React from "react";
import { StyledInput } from "./styles";

const Input = ({ name, type, value, onChange, placeholder }) => (
    <StyledInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
    ></StyledInput >
)

export default Input
