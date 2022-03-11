import React from 'react'
import Navigation from './Navigation';
import styled from 'styled-components'
const Sidebar = () => {
  return (
    <SidebarStyled>
        <Navigation/>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  height:100vh;

  position:fixed;
`;
export default Sidebar