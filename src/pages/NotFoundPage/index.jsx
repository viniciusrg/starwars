import { Link } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer";
import Footer from "../../components/Footer";

export default function NotFoundPage() {
    return (
        <>
            <BackgroundContainer>
                <h2><b>Not found page or planet</b></h2>
                <h2><Link to='/'>Pesquisar novamente</Link></h2>
            </BackgroundContainer>
            <Footer />
        </>
    )
}