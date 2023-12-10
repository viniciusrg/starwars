import { Link } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer";

export default function PlanetNotFound() {
    return(
        <BackgroundContainer>
            <h2><b>Planet not found!</b></h2>
            <h2><Link to='/'>Pesquisar novamente</Link></h2>
        </BackgroundContainer>
    )
}