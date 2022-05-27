import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>PLF Lab sg5</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Razvan Maciovan
                </h3>
            </SidebarInfo>
        </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;
const SidebarContainer = styled.div`
    color:white;
    background-color: var(--bg-color);
    flex:0.3;
`;
const SidebarHeader = styled.div``;
const SidebarInfo = styled.div``;