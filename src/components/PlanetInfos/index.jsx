import {Content} from "./styled";
import alderaan from '../../assets/planets/alderaan.png';
import bespin from '../../assets/planets/bespin.png';
import coruscant from '../../assets/planets/coruscant.png';
import dagobah from '../../assets/planets/dagobah.png';
import endor from '../../assets/planets/endor.png';
import hoth from '../../assets/planets/hoth.png';
import kashyyyk from '../../assets/planets/kashyyyk.png';
import mustafar from '../../assets/planets/mustafar.png';
import naboo from '../../assets/planets/naboo.png';
import tatooine from '../../assets/planets/tatooine.png';
import { FaTemperatureEmpty } from "react-icons/fa6";
import { CgTerrain } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function PlanetInfos({ title, climate, terrain, population, setEdit }) {

    const [planetImg, setPlaneImg] = useState();

    useEffect(() => {
        const titleCase = title.toLowerCase();
        switch (titleCase) {
            case "alderaan":
                setPlaneImg(alderaan);
                break;
            case "bespin":
                setPlaneImg(bespin);
                break;
            case "coruscant":
                setPlaneImg(coruscant);
                break;
            case "dagobah":
                setPlaneImg(dagobah);
                break;
            case "endor":
                setPlaneImg(endor);
                break;
            case "hoth":
                setPlaneImg(hoth);
                break;
            case "kashyyyk":
                setPlaneImg(kashyyyk);
                break;
            case "mustafar":
                setPlaneImg(mustafar);
                break;
            case "naboo":
                setPlaneImg(naboo);
                break;
            case "tatooine":
                setPlaneImg(tatooine);
                break;

            default:
                setPlaneImg(alderaan);
                break;
        }
    }, [title])

    const handleEdit = () => {
        setEdit(true);
    }

    return (
        <Content>
            <div className="planet">
                <img src={planetImg} alt="Imagem do planeta" width='82' height='82' />
                <div className="items">
                    <h4 onClick={handleEdit}>Planet:</h4>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="planet-info">
                <div className="items">
                    <FaTemperatureEmpty />
                    <p><b>Climate:</b> {climate}</p>
                </div>
                <div className="items">
                    <CgTerrain className="icon-detail"/>
                    <p><b>Terrain:</b> {terrain}</p>
                </div>
                <div className="items">
                    <FaUsers />
                    <p><b>Population:</b> {population}</p>
                </div>
            </div>
        </Content>
    )
}