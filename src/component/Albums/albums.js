//import "../../css/style.css"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { AlbumsContainer, AlbumsArtist, AlbumData, CoverAlbum } from "./style"

const Albums = ({artistName}) => {
  const [ albums, setAlbuns] = useState([])
  const [ error, setError] = useState(null)

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get("https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=" + artistName)
        setAlbuns(response.data.album)                
      }catch(error) {
        setError(error)
      }      
    }
    fetchAlbum()
  })

  return (
    <AlbumsContainer>
        <h3>Albums</h3>
        <AlbumsArtist>
          { error ? (
            <p>{error}</p>
          ) : (
            albums.map((album)=> {
              let { idAlbum, strAlbum, strAlbumThumb, intYearReleased,strStyle} = album 
              if (!strStyle){
                strStyle = "Not Data Found"
              }

              return(
                <AlbumData key={idAlbum}>
                  <h3>{strAlbum}</h3>                  
                  <CoverAlbum src={strAlbumThumb}/>                  
                  <p><b>Year: </b>{intYearReleased}</p>
                  <p><b>Style: </b>{strStyle}</p>
                </AlbumData>                
              )
            }
            )
          )}        
        </AlbumsArtist>        
    </AlbumsContainer>
    
    
  )
}

export default Albums