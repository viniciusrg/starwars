import {Container} from "./styled";
import logo from '../../assets/logo_starwars.svg';

export default function BackgroundContainer({ children }) {
    return (
        <Container>
            <h1>Planet Search</h1>
            <img className="image-logo" src={logo} alt="Logo StarWars" width='321' height='143' />

            {children}
        </Container>
    )
}