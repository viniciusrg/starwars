import {Box} from "./styled"
import { FaUser } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";
import { getPeople } from "../../api/getPeople";
import { useEffect, useState } from "react";

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
                    title ?
                        title === 'Residents' ?
                            peopleData.length > 0 ? peopleData.map(item => item?.name).join(', ') : '0'
                            :
                            peopleData.length > 0 ? peopleData.map(item => item?.title).slice(0, 5).join(', ') : '0'
                        : '...'
                }
            </p>
        </Box>
    )
}