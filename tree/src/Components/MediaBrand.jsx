import React from 'react'
import styled from "styled-components"

const MediaContainer = styled.div`
    height: 630px;
    width: 100%;
    background-color:${props => props.color};
`

const Container = styled.div`
    max-width: 900px;
    height: auto;
    margin: 0 auto;

`

const Media = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`

const Images = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function MediaBrand({data, title, backgroundColor = "white"}) {
    
    return (
        <MediaContainer color={backgroundColor}>
            <Container>
                {title}
                <Media>

                    {data.map((data) =>{
                        const {title, file} = data.fields
                        return(
                                <Images>
                                    <img width="200px" src={file.url} alt={title}/>
                                </Images>
                            )
                        })}
                </Media>
            </Container>
        </MediaContainer>
    )
}
