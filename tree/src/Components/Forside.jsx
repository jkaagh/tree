import React from "react"; 
import styled from "styled-components"
import {documentToHtmlString} from "@contentful/rich-text-html-renderer"
import Portfolio from "./Portfolio"
import MediaBrand from "./MediaBrand"
const Banner = styled.div`
    width: 100%;
    height: 1000px;
    background-image:url(${props => props.bannerImage});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: #fff;
        font-weight: 900;
        font-size: 5vw;
        margin: 0;
    }

`

const SektionOne = styled.div`
    width: 100%;
    height: 300px;
    background-color: rgba(206, 222, 218);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const SektionTwo = styled.div`
    width: 100%;
    height: 300px;
    background-color: rgba(29, 60, 52);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const PortfolioGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export default function Forside({data}){
    const { title, bannerImage, brands, gallery, media, sektionOne, sektionTwo } = data.fields;
    console.log(sektionOne)
    return (
        <div>

            <Banner bannerImage ={bannerImage.fields.file.url}>
                <h1>{title} </h1>
            </Banner>
            
            <SektionOne>
                <section dangerouslySetInnerHTML={{__html: documentToHtmlString(sektionOne)}}></section>
            </SektionOne>

            <SektionTwo>
                <section dangerouslySetInnerHTML={{__html: documentToHtmlString(sektionTwo)}}></section>
            </SektionTwo>

            <PortfolioGallery>
                {gallery.map((data, index) => (
                    <Portfolio data={data} />
                ))}
            </PortfolioGallery>


            <MediaBrand data={brands} title={"Our brand universes"}>

            </MediaBrand>
            
            <MediaBrand data={media} title={"We also offer media sales for"} backgroundColor={"rgb(206, 222, 218)"}>

            </MediaBrand>
        </div>
    )
}