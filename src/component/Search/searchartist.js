import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContainer, SearchForm, Searchlabel, SearchInput, SearchButton } from './style'

const Searchartist = ( {sendPrompt} ) => {
    const navigate = useNavigate()

    const [textInput, setTextInput] = useState("")
  
    const handleInputChange = (e) => {
        try {
            setTextInput(e.target.value) // solo texto, no objeto
        }
        catch(error){ console.log("Falla")}
    }

    const handleSubmit = (e) => {
        e.preventDefault()   
        sendPrompt(textInput)
        navigate("/artist")
    }

  return (
    <SearchContainer>
        <SearchForm onSubmit={handleSubmit}>
            <div>
                <Searchlabel>Search Artist</Searchlabel>  
                <SearchInput name='search'
                    type='text'
                    placeholder='Search by Artist'
                    required
                    onChange={handleInputChange}
                />                                              
            </div>
            <SearchButton type='submit'>Seacrh</SearchButton>            
        </SearchForm>        
    </SearchContainer>    
  )
}

export default Searchartist