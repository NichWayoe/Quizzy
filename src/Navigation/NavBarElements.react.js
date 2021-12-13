import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #4A4242;
    height: flex;
    display: flex;
    justify-Content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10;
`

export const NavDropdown = styled.div`
    display: inline-block;
`
export const NavDropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;

    &.active {
        color: #FE6D6D
    }
`

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export const NavBtn= styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    boarder: None;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`