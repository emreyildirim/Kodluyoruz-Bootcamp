import styled from "styled-components";
import {Delete} from '@styled-icons/typicons';

export const Layout = styled.div`
width:100;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
background-color:#e4e4e4;
`;
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color:#FFF;
  box-shadow: 10px 10px 5px 0px rgba(212,212,212,1);
  margin-top:20px;
`;

export const Task = styled.label`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top:1px solid #d6d4d4;
  border-bottom:1px  solid #d6d4d4;
`;

export const IconWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;
export const Icon = styled(Delete)`
width:25px;
height:25px;
color:red;
cursor:pointer;
`;
export const NewTaskWrapper = styled.div`
display:flex;
justify-content:space-between;
width:100%;
height:35px;

`;
export const NewTask = styled.input`
width:70%;
padding-left:5px;

`;
export const Submit = styled.button`
background-color:#399439;
color:#FFF;
width:20%;
cursor: pointer;

`; 

export const Todos = styled.div`
  width: 100%;
  padding:15px;
  font-weight:bold;
`;
