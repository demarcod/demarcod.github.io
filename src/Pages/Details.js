import React from 'react';
import Portfolio from '../portfolio';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Details = (props) => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidestoScroll: 1,
        className: "slides"
    }

    const detail = Portfolio.get(
        props.match.params.name
    )

    if (!detail) {
        return <div>Sorry, but the project was not found</div>
    }

  return (
    <div>
        <h1 className="detail-title">{detail.name}</h1>
        <h3 className="detail-description">{detail.description}</h3>
        <div className="slide" style={{padding: '10px 15%'}}>
            <Slider {...settings}>
                {detail.images.map((image) => {
                    return(
                        <div>
                            <img className="imgg" width='100%' height='20%' src={image.photo}/>
                            <div style={{'font-family': 'Lato', 'padding-top': '7px'}}>{image.desc}</div>
                        </div>
                    )
                })}
            </Slider>
        </div>
        <div style={{'padding-bottom': '50px'}}>
            <h1 className="project-title">About this project</h1>
            <p>{detail.longDesc}</p>
            <h1 className="project-title">Technologies/skills used</h1>
            <ul className="project-list">
                {detail.category.map((skill) => {
                    return(
                        <li className="project-item">
                            {skill}
                        </li>
                    )
                })}
            </ul>
            <h1 className="project-title">Resources</h1>
            <p className="resources-text">Like what you see? Explore this project more using the resources below!</p>
            <ul className="project-list">
                {detail.resources.map((resource) => {
                    return(
                        <li className="project-item">
                            <a href={resource.link} rel="noopener noreferrer" target="_blank">{resource.text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <Link to='/projects' className="back-link">Back</Link>
    </div>
  )
}

export default Details
