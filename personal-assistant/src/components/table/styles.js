import styled from 'styled-components';

export const StyledTable = styled.table`
  border: none;
  border-collapse: collapse;

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  tbody {
    vertical-align: top;
  }
  td,
  th {
    border: none;
    padding: 10px;
  }
  td {
    padding: 20px 40px;
  }

  tbody tr {
    :hover {
      background-color: #AFDBD2;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`;