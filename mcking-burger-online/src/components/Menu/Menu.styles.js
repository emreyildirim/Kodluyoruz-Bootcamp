import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 33%;
  background-color: #ffc613;
  display:flex;
  justify-content:center;
`;
export const Content = styled.div`
  width:40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) =>
    props.order &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content:start;
      margin-left:25px;
      width:20%;
    `};
`;
export const ProductName = styled.div`
  width: 10%;
`;

export const Price = styled.div`
 width: 10%;
 `;
export const Qty = styled.div`
  width: 5%;
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
`;
export const MenuButton = styled.button`
  width: 15%;
  color: #fff;
  outline: none;
  cursor:pointer;
  ${(props) =>
    props.increment &&
    css`
      background-color: #3d9237;
    `};
  ${(props) =>
    props.decrement &&
    css`
      background-color: #545454;
    `};
  ${(props) =>
    props.order &&
    css`
      width:45%;
      height:15%;
      background-color: #0267b4;
    `};
`;
export const CurrentPrice = styled.div`
  width:60%;
  margin-right:15px;
`;