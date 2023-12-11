import styled from "styled-components";
import logoPreta from '../../assets/logo_starwars_preta.svg';

const Container = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background);
    padding-top: 19px;
    padding-bottom: 29px;
    gap: 64px;
    color: var(--color-font-footer);
    font-size: 14px;
    border: 1px solid var(--color-font-items);
    box-sizing: border-box;
    
    .line{
        border-right: 1px solid var(--color-font-items);
        height: 44px;
    }

    @media (max-width: 425px){
        .line, p{
            display: none;
        }
    }
`

export default function Footer() {
    return (
        <Container>
            <p>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</p>
            <div className="line"></div>
            <img src={logoPreta} alt="Logo StarWars Preta" width='84' height='37' />
        </Container>
    )
}