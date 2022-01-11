import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledInput = styled.input`
    padding: 12px 20px;
    width: 50%;
    display: block;
    margin: 5px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 1px solid #aaa;
`

export const Wrapper = styled.div`
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme: { colors } }) => colors.persianGreen};
    position: relative;
    top: 17px;
    
`