import React from "react";
import { StyledImage, FlexContainer } from "./styles";

const TwoImages = ({ src1, src2, alt1, alt2 }) => (
    <FlexContainer>
        <StyledImage src={src1} alt={alt1}></StyledImage >
        <StyledImage src={src2} alt={alt2}></StyledImage >
    </FlexContainer>
)

export default TwoImages
