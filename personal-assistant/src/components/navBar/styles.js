import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNav = styled.div`
    background-color: ${({ theme: { colors } }) => colors.bluishGray};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

`
export const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: ${({ theme: { colors } }) => colors.persianGreen};
    padding: 15px;
    border-radius: 15px;
    text-align: center;
    transition: all 200ms;

    &:hover {
        background-color: ${({ theme: { colors } }) => colors.lightGreen};;
    }

    &:visited {
        color: white;
    }
`
export const NavTitle = styled.h1`
font-family: 'Courier New', Courier, monospace;
    color: white;
    text-transform: uppercase;
    text-align: center;
`