import styled from "styled-components";
import PlanetInfos from "../PlanetInfos";
import PlanetBox from "../PlanetBox";
import BackArrow from "../BackArrow";
import EditPlanetName from "../EditPlanetName";
import { useState } from "react";
import SearchButton from "../SearchButton";


const Container = styled.div`
    width: 592px;
    height: auto;
    background-color: var(--color-background);
    border-radius: 10px;
    margin: auto;
    padding: 24px 0px;
`

export default function ResultContainer({ planetData, setPlanetData }) {
    const [edit, setEdit] = useState(false);
    const [input, setInput] = useState('');
    const handleEdit = () => {
        const update = { ...planetData };
        update.name = input;
        setPlanetData(update);
        setEdit(false);
    }

    console.log(planetData.name)

    return (
        <Container>
            <PlanetInfos
                title={planetData.name}
                climate={planetData.climate}
                terrain={planetData.terrain}
                population={planetData.population}
                setEdit={setEdit}
            />
            {
                edit === true ?
                    <EditPlanetName input={input} setInput={setInput}>
                        <SearchButton icon='false' event={handleEdit}>
                            Salvar
                        </SearchButton>
                    </EditPlanetName>
                    : ''
            }
            <PlanetBox
                icon='user'
                title='Residents'
                items={planetData.residents}
            />
            <PlanetBox
                icon='film'
                title='Films (5)'
                items={planetData.films}
            />
            <BackArrow />
        </Container>
    )
}