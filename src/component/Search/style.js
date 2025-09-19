import styled from "styled-components";
import { Themes } from "../../themes/index"

const SearchContainer = styled.div `
    color: ${props => props.theme.color.textcolor};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const SearchForm = styled.form `
    padding: 2rem;
    font-size: 24px;
    text-align: center;
`

const Searchlabel = styled.label `
    padding: 1rem;
`

const SearchInput = styled.input `
    padding: 5px;
    border-radius: 25px;   
    text-align: center;
    font-weight: bold;
    font-size: 16px;
`

const SearchButton = styled.button `
    border-radius: 10px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    width: 100px;
    font-weight: bold;

    &:hover {
        cursor:  pointer;
    }
`

export {
    SearchContainer,
    SearchForm, 
    Searchlabel,
    SearchInput,
    SearchButton
}