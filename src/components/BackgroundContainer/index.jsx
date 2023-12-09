import styled from "styled-components";
import logo from '../../assets/logo_starwars.svg';
import imgBackground from '../../assets/background.png';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${imgBackground});
    background-size: cover;
    background-position: center;
    text-align: center;

    h1{
        padding-top: 75px;
        margin-bottom: 16px;
        text-transform: uppercase;
    }

    .image-logo{
        margin-bottom: 54px;
    }
`

export default function BackgroundContainer({ children }) {
    return (
        <Container>
            <h1>Planet Search</h1>
            <img className="image-logo" src={logo} alt="Logo StarWars" width='321' height='143' />

            {children}
        </Container>
    )
}