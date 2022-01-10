import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts[0]};
`;

export const Container = styled.div`
    padding: 8%;
`

export const StyledH1 = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  color: ${({ theme: { colors } }) => colors.strongCyan};
  display: block;
  text-align: center;
  margin: 0 auto 40px auto;
`;

export const PrettyText = styled.td`
 font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.persianGreen};
  display: block;
  text-align: center;
  margin: 0 auto 40px auto;
  background-color: ${props => props.theme.colors.lightGray};
`;

export const StyledInput = styled.input`
    padding: 12px 20px;
    width: 50%;
    display: block;
    margin: 7px auto;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 1px solid #aaa;
`

export const MyTable = styled.table` 
  border: none;
  border-collapse: collapse;

  vertical-align: middle;

  tbody {
    vertical-align: middle;
  }
  td,
  th {
    border: none;
    padding: 10px;
  }
  td {
    padding: 15px 30px;
  }

  tbody tr {
    :hover {
      background-color: #AFDBD2;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`