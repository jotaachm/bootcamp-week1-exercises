import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 12px 12px;
    display: block;
    margin: 5px auto;
    cursor: pointer;
    background: ${({ theme: { colors } }) => colors.persianGreen};
    color: white;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 500;
    transition: 300ms all;

    :hover {
      background-color: #AFDBD2;
    }
`