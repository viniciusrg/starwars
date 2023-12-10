import styled from "styled-components";
import mars from '../../assets/mars.png';
import spaceship from '../../assets/spaceship.png';
import SearchInput from "../SearchInput";
import SearchButton from "../SearchButton";
import { RiEqualizerLine } from "react-icons/ri";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Div = styled.div`
    width: 800px;
    height: 402px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .image{
        position: relative;
    }

    .image img:nth-child(2){
        position: absolute;
        bottom: -136px;
        left: -136px;
    }

    .content{
        width: 400px;
        height: 402px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        gap: 16px;
        padding: 0px 54px;
        box-sizing: border-box;
    }

    form{
        width: 100%;
    }

    .filter{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-around;
        align-items: center;
        color: var(--color-font);
        font-size: 14px;
        padding: 0px 16px;
    }

    .icon-filter{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        gap: 8px;
    }

    .icon-filter:first{
        font-weight: 700;
    }

    .filter svg{
        font-size: 15px;
    }
`

export default function HomeSearch() {

    const [input, setInput] = useState('');

    return (
        <Div>
            <div className="image">
                <img src={mars} alt="Imagem de Marte" width='400' height='402' />
                <img src={spaceship} alt="Nave espacial" width='462' height='328' />
            </div>
            <div className="content">
                <h2>
                    Discover all the information about Planets of the Star Wars Saga
                </h2>
                <form>
                    <SearchInput setInput={setInput} input={input} placeholder="Enter the name in the planet" />
                    <Link to={`/searchPage/${input}`}>
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
                        <p>Name</p>
                    </div>
                    <div className="icon-filter">
                        <MdExpandMore />
                        <p>Population</p>
                    </div>
                </div>
            </div>
        </Div>
    )
}