import styled from "styled-components";

const ContainerLibrary = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;     
    background-color: #14080e;
    color: aqua;
    border-radius: 10px;
    border: 3px solid #4F86C6;
    margin: 1rem;    
`

const BandContainer = styled.section `
    text-align: center;
`

const ContainerLogo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BandBanner = styled.img `
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const BandLogo = styled.img `
    width: 300px;
`


export {
    ContainerLibrary,
    BandContainer,
    ContainerLogo,
    BandBanner,
    BandLogo
}