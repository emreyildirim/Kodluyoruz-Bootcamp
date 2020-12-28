import styled from 'styled-components'

export const Wrapper = styled.div `
display:flex;
flex-direction:column;
margin:auto;
align-self:center;
width:300px;
height:auto;
margin-bottom:20px;
&>*{
    border: 3px solid #1B0F01;
    margin:1px;
    align-self:center;
    width:100%;
}
`;
export const BreadTop = styled.div`
height:75px;
border-radius: 100px 100px 20px 20px;
height: 120px;
background: linear-gradient(#FFB737,#E88B00);
`;
export const BreadBottom = styled.div`
height: 40px;
background: #E88B00;
border-radius: 15px;
`;

export const CheeseItem = styled.div`
height:10px;
background-color:#fdde03;
border-radius: 10%;
`;

export const MeatItem = styled.div `
height: 20px;
background: #98503B;
border-radius: 5px;
`;
export const SaladItem = styled.div `
height: 15px;
background: #04AA5A;
border-radius: 10px;
border-left: 1px;
border-right: 1px;
`;