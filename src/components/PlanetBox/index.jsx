import styled from "styled-components"
import { FaUser } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";
import { getPeople } from "../../api/getPeople";
import { useEffect, useState } from "react";

const Box = styled.div`
    width: 538px;
    height: auto;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--color-background-box);
    margin: auto;
    margin-bottom: 8px;

    .title{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    p{
        margin-top: 16px;
        text-align: left;
    }
`

export default function PlanetBox({ icon, title, items }) {

    const [peopleData, setPeopleData] = useState([
        {
            "title": "Carregando...",
            "name": "Carregando..."
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!Array.isArray(items)) {
                    // console.error('Items is not an array:', items);
                    return;
                }

                const requests = items.map((item) => getPeople(item));
                const responses = await Promise.all(requests);

                setPeopleData(responses);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [items]);

    return (
        <Box>
            <div className="title">
                {
                    icon === 'user' ? <FaUser /> : <PiFilmSlateBold />
                }
                <h4><b>{title}:</b></h4>
            </div>
            <hr />
            <p>
                {
                    title === 'Residents' ?
                        peopleData.length > 0 ? peopleData.map(item => item.name).join(', ') : '0'
                        :
                        peopleData.length > 0 ? peopleData.map(item => item.title).slice(0, 5).join(', ') : '0'
                }
            </p>
        </Box>
    )
}