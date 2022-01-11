import React from "react";

import { StyledInput, Wrapper } from "./styles";
import { StyledIcon } from "./styles";

const Input = ({ name, type, value, onChange, placeholder, icon }) => (
    <Wrapper>
        <StyledIcon icon={icon}></StyledIcon>
        <StyledInput
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="off"
        ></StyledInput >
    </Wrapper>
)

export default Input
