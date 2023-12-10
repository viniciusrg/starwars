import styled from "styled-components";
import { LuSearch } from "react-icons/lu";

const Button = styled.button`
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: var(--color-font);
    background-color: var(--color-button);
    text-align: center;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0px;

    svg{
        font-size: 18px;
    }
`

export default function SearchButton({ children, icon, event }) {
    return (
        <Button onClick={event}>
            {
                icon === 'true' ? <LuSearch /> : ''
            }
            {children}
        </Button>
    )
}