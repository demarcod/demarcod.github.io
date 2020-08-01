import React from 'react';
import Portfolio from '../portfolio';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const thing = localStorage.getItem('name')

const Details = (props) => {
    window.scrollTo(0, 0)
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
        localStorage.getItem('name'),
    )

    if (!detail) {
        return (
            <div className="no-detail">
                <h1 className="thing">Pick a project from the&nbsp;<a className="thingy wow animate__animated animate__pulse" href=".#/projects">projects page</a>&nbsp;to view its details!</h1>
            </div>
        )
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
                            <img className="detail-images" src={image.photo}/>
                            <div className="detail-images-description">{image.desc}</div>
                        </div>
                    )
                })}
            </Slider>
        </div>
        <div style={{'padding-bottom': '50px'}}>
            <h1 className="project-title">About this project</h1>
            <p className="project-text">{detail.longDesc}</p>
            <h1 className="project-title">Technologies & skills used</h1>
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
            <p className="project-text">Like what you see? Explore this project more using the resource(s) below!</p>
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
