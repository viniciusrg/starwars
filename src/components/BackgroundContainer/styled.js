import styled from "styled-components";
import imgBackground from '../../assets/background.png';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-image: url(${imgBackground});
background-size: cover;
background-position: center;
background-attachment: fixed;
text-align: center;
padding: 75px 0px 130px 0px;
box-sizing: border-box;

h1{
    margin-bottom: 16px;
    text-transform: uppercase;
}

@media (max-width: 425px){
    h1{
        font-size: 10px;
    }
}

.image-logo{
    margin-bottom: 54px;
}

@media (max-width: 1024px){
    .image-logo{
        width: 250px;
        height: auto;
    }
}

@media (max-width: 425px){
    .image-logo{
        width: 209px;
    }
}
`