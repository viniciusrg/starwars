import { useEffect, useState } from "react";
import Background from "../../components/BackgroundContainer";
import Footer from "../../components/Footer";
import ResultContainer from "../../components/ResultContainer";
import { getPlanet } from "../../api/getPlanet";
import { useParams } from "react-router-dom";

export default function SearchPage() {

    const { planetName } = useParams();

    const [planetData, setPlanetData] = useState({
        'name': 'Caregando...',
        'climate': 'Caregando...',
        'terrain': 'Caregando...',
        'population': 'Caregando...',
        'residents': 'Caregando...',
        'films': 'Caregando...',
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPlanet(planetName);
            setPlanetData(...data.results);
        }

        fetchData();
    }, [planetName]);

    if (!planetData){
        setPlanetData({
            'name': 'Not found...',
            'climate': 'Not found...',
            'terrain': 'Not found...',
            'population': 'Not found...',
            'residents': 'Not found...',
            'films': 'Not found...',
        })
        window.location.href = '/planetNotFound';
    }

    return (
        <>
            <Background>
                <ResultContainer planetData={planetData} setPlanetData={setPlanetData}/>
            </Background>
            <Footer />
        </>
    )
}