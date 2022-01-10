import React from 'react'
import { StyledNav, StyledLink, NavTitle } from './styles'

export const NavBar = () => (
    <StyledNav>
        <StyledLink to='/'>Home Page</StyledLink>
        <NavTitle>Personal Assistant</NavTitle>
        <StyledLink to='/todo'>To-do List</StyledLink>
    </StyledNav>
)

export default NavBar;