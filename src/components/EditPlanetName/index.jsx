import styled from "styled-components"
import SearchInput from "../SearchInput"

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

export default function EditPlanetName ({children, input, setInput}) {

    return(
        <Box>
            <SearchInput placeholder='Editar nome do planeta' setInput={setInput} input={input}/>
            {children}
        </Box>
    )
}