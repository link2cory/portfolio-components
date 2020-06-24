import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import { NavBarProps } from './interfaces'

const StyledNavBar = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 30px 10%;
  background-color: ${(props) => props.theme.colors['gray-900']};
`

const Nav = styled.nav``

const NavList = styled.ul`
  list-style: none;
`

const NavItem = styled.li`
  display: inline-block;
  padding: 0px 20px;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
`
const NavBar: React.FC<NavBarProps> = ({}: NavBarProps) => (
  <StyledNavBar>
    <Nav>
      <NavList>
        <NavItem>
          <Button href='#'>Services</Button>
        </NavItem>
        <NavItem>
          <Button href='#'>Projects</Button>
        </NavItem>
        <NavItem>
          <Button href='#'>About</Button>
        </NavItem>
      </NavList>
    </Nav>
    <Button variant='primary' href='#'>
      Contact
    </Button>
  </StyledNavBar>
)

export default NavBar
