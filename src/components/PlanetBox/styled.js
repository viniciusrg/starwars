import styled from "styled-components";

export const Box = styled.div`
width: 538px;
height: auto;
padding: 16px;
border-radius: 8px;
background-color: var(--color-background-box);
margin: auto;
margin-bottom: 8px;
box-sizing: border-box;

@media (max-width: 425px){
    width: 90%;
}

.title{
    display: flex;
    align-items: center;
    gap: 5px;
}

p{
    margin-top: 16px;
    text-align: left;
}
`