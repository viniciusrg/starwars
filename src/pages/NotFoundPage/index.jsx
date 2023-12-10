import { Link } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer";

export default function NotFoundPage() {
    return(
        <BackgroundContainer>
            <h2><b>Not found page</b></h2>
            <h2><Link to='/'>Pesquisar novamente</Link></h2>
        </BackgroundContainer>
    )
}