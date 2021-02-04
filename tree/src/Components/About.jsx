import React from 'react'
import styled from "styled-components"
import * as contentful from "contentful"


const client = contentful.createClient({
    space: "pns8ulj2szxl",
    accessToken: "5BvDZhevRlzOu0IaVxGJ7-gQGg8USReCQ6rtSuQrHJQ"
  })


const Splash = styled.div`
    background-color: #1d3c34;
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextContainer = styled.div`
    /* background-color: pink; */
    width: 80%;
    height: 100px;
`
const AboutTitle = styled.h1`
    color:white;
    font-size: 400%;
    font-weight: bold;
    margin: 0;
`
const AboutP = styled.p`
    color:white;
    /* font-size: 400%; */
    font-weight: bold;
    margin: 0;
`

const ImageContainer = styled.div`
    position: absolute;
`


export default function About() {




    return (
        <div>
            <Splash>
                <ImageContainer>
                    <img src="" alt=""/>
                </ImageContainer>
                <TextContainer>
                    <AboutTitle>About us</AboutTitle>
                    <AboutP>indsæt tekst her</AboutP>
                </TextContainer>
            </Splash>
        </div>
    )
}
