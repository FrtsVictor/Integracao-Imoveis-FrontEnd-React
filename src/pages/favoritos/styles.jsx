import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex:1;
    `;

export const Filter = styled.div`
    display: flex;
    width: 20%;
    border-right: 1px solid #000;
    min-height:100%;
    background-color:grey;
 `;

export const CardContainer = styled.div`
display:flex;
flex-wrap:wrap;
align-items: center;
justify-content:center;
height:100%;
`;

export const CardDiv = styled.div`
display: flex;
width: 30%;
height: 70%;
padding: 1% 0;
min-width: 300px;
`;

export const PageDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
`;

export const InputType = styled.div`
    margin-right:80px;
    margin-bottom:50px;
`;

export const SearchTitle = styled.div`
display: flex;
flex-direction:column;
`;

export const LineInput = styled.div`
display: flex;
`;

export const FilterGrid = styled.div`
display: grid;
grid-template-columns: 1fr;

label{
    display:inline-block;
}

input{
    display:inline-block;
}

`;
