import { Avatar } from "@material-ui/core";
import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return <HeaderContainer>
     {/*Header left */}
        <HeaderLeft>
            <HeaderAvatar 
            />
            <AccessTimeIcon/>
        </HeaderLeft>
     {/*Header mid */}
     <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search..."/>
     </HeaderSearch>
     {/*Header right */}
       <HeaderRight>
         <HelpOutlineIcon />
       </HeaderRight>
  </HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.div`
display:flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--bg-color);
color:var(--beige);`;
const HeaderRight = styled.div`
flex:0.3;
display:flex;
align-items:flex-end; 
> .MuiSvgIcon-root{
   margin-left :auto;
   margin-right:20px;
}
`;

const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;

> .MuiSvgIcon-root {
   margin-left:auto;
   margin-right:30px;
}
`;
const HeaderSearch = styled.div`
flex:0.4;
opacity:1;
border-radius:6px;
background-color:var(--bg-color-light);
text-align:center;
display:flex;
padding:0px 10px;
color:grey;
border:1px solid grey;

> input {
   background-color:transparent;
   border:none;
   text-align:center;
   min-width:30vw;
   outline: 0;
   color:var(--beige);
}
`;

const HeaderAvatar = styled(Avatar)`
cursor:pointer;
:hover{
   opacity:0.7;
}`;
