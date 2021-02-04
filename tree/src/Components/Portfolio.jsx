import React from 'react'
import styled from "styled-components"

const Content = styled.div`
    height: 600px;
    width: auto;
    background-image:url(${props => props.image});
    background-size:cover;
    background-position:center;

    &:hover{
        cursor: pointer;
        div{
            transition: 1s ease-in-out;
            opacity:1;
        }
    }

`
const Overlay = styled.div`
    background: rgba(255, 255, 255, 0.85);
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2{
        margin-bottom: 5px;
    }
    h4{
        font-weight: 300;
        margin-top: 0px;
    }

`

export default function Portfolio({data}) {
    console.log(data.fields.file.url)
    return (
        <Content image={data.fields.file.url}>
            <Overlay>
                <h2>
                    {data.fields.title}
                </h2>
                <h4>Benjamin Brand | Danish</h4>
            </Overlay>
        </Content>
    )
}
