import styled from "styled-components";

export const Logo = styled.img`
    width:125px;
    height:auto;
    margin-top:25px;
`;

export const Nav =  styled.div`
    display:flex;
    width:100%auto;
    height:75px;
    align-items:center;
    background-color:#3d9237;
    justify-content:space-between;
    margin-bottom:20px;
`;
export const NavItem = styled.div`
    margin-right:15px;
 & > a {

     color:#FFF;
     text-decoration: none;
 }
`;