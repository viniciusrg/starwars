import styled from "styled-components"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Arrow = styled.div`
    position: absolute;
    bottom: 12rem;
    right: 35%;
    color: var(--color-font);
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;

    p{
        margin-left: 8px;
    }
`

export default function BackArrow() {
    return (
        <Link to='/'>
            <Arrow>
                <IoIosArrowBack />
                <p>Voltar</p>
            </Arrow>
        </Link>
    )
}