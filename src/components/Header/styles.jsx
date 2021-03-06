import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
    display: flex;
    height: 22vh;
    flex-wrap:wrap;
    margin-bottom: 45px;
    border-bottom: 1px solid #efefef;
    font-family: 'Oxygen', sans-serif;
    font-weight: bold;
    background-color:#FFB003;

`;

export const LinksContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:1;
font-size: 17px;


ul {
    list-style: none;
    display:flex;
    align-items:center;
    height:100%;
}

li{
    margin:0 30px;
    align-items:center;


}

a{
    display:flex;
    font-size:20px;
    align-items:center;
    text-decoration: none;
    color: #fff;
    &:hover{
    color: #93c6f9;
    transition: 0.2s;
    }
}

span{
    cursor: pointer;
    &:hover{
        color:#93c6f9;
    }
}
form{
    display: flex;

}

`;

export const LogoContainer = styled.div`
align-content:center;
display:flex;
flex:1;
margin:15px;

img{
        /* position:flex; */
        justify-content:flex-start;
        min-width: 250px;
        width: 10vw;
        margin-bottom:-20px;

    }
`;

export const SearchContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex: 2;



input {
    padding:10px;
    border-radius: 5px 0px 0px 5px;
    background: #efefef;
    border:1px solid #000000;
    height: 40px;
    width: 380px;
    transition: 0.3s;
    font-size:19px;
    font-style:italic;


}

input[type=text]:hover{

    background: #e1e1e8;
    border:1px solid #006699;

}

button{
    border-radius: 0px 5px 5px 0px;
    border-left:none;
    background: #efefef;
    border:1px solid #000000;
    width:45px;
    height: 40px;
    transition: 0.3s;
    font-size:15px;

        :hover{

        background: #e1e1e8;
        border:1px solid #006699;

        }
    }

`;
