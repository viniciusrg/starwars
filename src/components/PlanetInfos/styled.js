import styled from "styled-components";

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 38px;
padding: 26px;
box-sizing: border-box;
text-align: left;

@media (max-width: 425px){
    flex-wrap: wrap;
    padding: 8px 32px;
}

.planet{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.planet h3{
    text-transform: uppercase;
}

@media (max-width: 425px){
    .planet h3{
        margin-top: 8px;
    }
}

.planet h4::after{
    content: ' ✏️';
    cursor: pointer;
    position: absolute;
}

.planet .items{
    text-align: left;
    margin-left: 8px;
}

.planet-info .items{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-bottom: 12px;
}

.planet-info p {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-transform: capitalize;
}

.planet-info svg {
    font-size: 18px;
}

@media (max-width: 425px){
    .planet-info .icon-detail{
        font-size: 38px;
    }
}
`