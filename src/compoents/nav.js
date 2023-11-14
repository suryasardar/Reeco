 

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

 

const NavBar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Reeco</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/store">Store</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/orders">Orders Analytics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/hello">Hello Surya</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: green;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
export default NavBar;
