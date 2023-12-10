import styled from "styled-components"

const Input = styled.input`
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: var(--color-input);
    text-align: center;
    border: none;
    border-radius: 5px;
    margin-bottom: 8px;
    box-sizing: border-box;

    ::placeholder{
        color: var(--color-input);
    }
`

export default function SearchInput ({placeholder, input, setInput}) {

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return(
        <Input onChange={handleInput} value={input} placeholder={placeholder} />
    )
}