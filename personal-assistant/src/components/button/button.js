import React from "react";
import { StyledButton } from "./styles";

const Button = ({ buttonText, onClick }) => (
    <StyledButton onClick={onClick}>{buttonText}</StyledButton >
)

export default Button
