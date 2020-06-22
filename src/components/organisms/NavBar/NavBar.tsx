import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import { NavBarProps } from './interfaces'

const StyledNavBar = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 30px 10%;
  background-color: #24252a;
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
  color: #edf0f1;
  text-decoration: none;
`

const Link = styled.a`
  font-weight: 500;
  font-size: 1rem;
  color: #edf0f1;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #0088a9;
  }
`

const NavBar: React.FC<NavBarProps> = ({}: NavBarProps) => (
  <StyledNavBar>
    <Nav>
      <NavList>
        <NavItem>
          <Link href='#'>Services</Link>
        </NavItem>
        <NavItem>
          <Link href='#'>Projects</Link>
        </NavItem>
        <NavItem>
          <Link href='#'>About</Link>
        </NavItem>
      </NavList>
    </Nav>
    <Button href='#'>Contact</Button>
  </StyledNavBar>
)

export default NavBar
