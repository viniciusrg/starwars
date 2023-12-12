import { useEffect, useState } from "react";
import BackgroundContainer from "../../components/BackgroundContainer";
import Footer from "../../components/Footer";
import ResultContainer from "../../components/ResultContainer";
import { getPlanet } from "../../api/getPlanet";
import { useParams } from "react-router-dom";
import { getPopulation } from "../../api/getPopulation";

export default function SearchPage() {

    const { planetInput, filter } = useParams();

    const [planetData, setPlanetData] = useState({
        'name': 'Caregando...',
        'climate': 'Caregando...',
        'terrain': 'Caregando...',
        'population': 'Caregando...',
        'residents': 'Caregando...',
        'films': 'Caregando...',
    });

    useEffect(() => {
        if (filter === 'false') {
            // getPlanetName
            const fetchData = async () => {
                const data = await getPlanet(planetInput);
                setPlanetData(...data?.results);
            }

            fetchData();
        } else {
            // getPopulation
            const fetchData = async () => {
                try {
                    const data = await getPopulation(parseInt(planetInput));
                    setPlanetData(...data);
                } catch (error) {
                    console.error('Erro ao buscar planetas por população:', error);
                }
            };

            fetchData();
        }
    }, [planetInput, filter]);

    if (!planetData) {
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
            <BackgroundContainer>
                <ResultContainer planetData={planetData} setPlanetData={setPlanetData} />
            </BackgroundContainer>
            <Footer />
        </>
    )
}