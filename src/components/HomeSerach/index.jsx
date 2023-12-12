import mars from '../../assets/mars.png';
import spaceship from '../../assets/spaceship1.png';
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import { RiEqualizerLine } from "react-icons/ri";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Div } from './styled';

export default function HomeSearch() {

    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('false');

    return (
        <Div>
            <div className="image">
                <img src={mars} alt="Imagem de Marte" width='400' height='402' />
                <img src={spaceship} alt="Nave espacial" width='386' height='201' />
            </div>
            <div className="content">
                <h2>
                    Discover all the information about Planets of the Star Wars Saga
                </h2>
                <form>
                    <SearchInput setInput={setInput} input={input} placeholder="Enter the name in the planet" />
                    <Link to={`/searchPage/${input}/${filter}`}>
                        <SearchButton icon='true'>
                            Search
                        </SearchButton>
                    </Link>
                </form>
                <div className="filter">
                    <div className="icon-filter">
                        <RiEqualizerLine />
                        <p>Filter:</p>
                    </div>
                    <div className="icon-filter">
                        <MdExpandMore />
                        <p id='name' onClick={() => {
                            setFilter('false');
                            document.getElementById('name').style.fontWeight = '700';
                            document.getElementById('population').style.fontWeight = '400';
                        }}>Name</p>
                    </div>
                    <div className="icon-filter">
                        <MdExpandMore />
                        <p id='population' onClick={() => {
                            setFilter('true');
                            document.getElementById('name').style.fontWeight = '400';
                            document.getElementById('population').style.fontWeight = '700';
                        }}>Population</p>
                    </div>
                </div>
            </div>
        </Div>
    )
}