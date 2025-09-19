import styled from "styled-components";
import Theme from "../../component/theme/index"


const AlbumsContainer = styled.div `
    text-align: center;
    color: ${props => Theme.colors.textColor};
`

const AlbumsArtist = styled.section `
    display: grid;
    grid-template-columns: repeat(4, 25%);

    @media (max-width: 1180px){    
        grid-template-columns: repeat(3, 30%);
    }

    @media (max-width: 770px){    
        grid-template-columns: repeat(2, 50%);
    }

    
    @media (max-width: 550px){    
        grid-template-columns: repeat(1, 100%);
    }
`

const AlbumData = styled.article `
    margin: rem;
    padding: 3rem;

    &:hover {
        cursor: pointer;
        border: solid 1px #4F86C6;
        border-radius: 7px;
    }
`

const CoverAlbum = styled.img `
    width: 200px;
`
const YearAlbum = styled.p `
    color: ${({score}) => 
    (score >= 2010 ? "#74b667ff" : "cyan")}
    
`

export {
    AlbumsContainer,
    AlbumsArtist,
    AlbumData,
    CoverAlbum , 
    YearAlbum   
}