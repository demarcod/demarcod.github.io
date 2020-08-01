import React from 'react';
import Hero from '../Components/Hero';
import skills from '../skills';

function About(props){
    localStorage.clear()
        return(
            <div>
                <Hero title={props.title} text={props.text} />
                <div className="about-content">
                    <div>
                    <img className="full-avatar-img" src={require('../Assets/Images/full-avatar.jpeg')} />
                    </div>
                    <div className="about-text">
                        <h5 className="about-text-title">ABOUT</h5>
                        <hr/>
                        <div className="about-text-content">
                            <p>I'm Donnatella DeMarco - a highly motivated and ambitious Software Developer with 2 years of professional experience. I'm experienced primarily in full-stack development, web design, and research.</p>
                            <p>I'm currently on the lookout for an exciting employment opportunity or a new project to be involved in. <a href=".#/contact">Contact me</a> if you like what you see and want to collaborate!</p>
                        </div>
                        <h5 className="about-text-title">EDUCATION</h5>
                        <hr/>
                        <div className="about-text-content">
                            <p>Bachelor's of Computer Science (Honours) with Co-op<br/>
                            University of Windsor, Windsor, ON<br/>
                            Sep 2015 - Oct 2019</p>
                        </div>
                        <h5 className="about-text-title">SKILLS</h5>
                        <hr/>
                        <div className="about-text-content">
                            <ul>
                                <li>ANGULAR</li>
                                <li>JAVA</li>
                                <li>POWERSHELL</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                {skills.map(skills => (
                                    <li>{skills.name}</li>
                                ))}
                            </ul>
                        </div>    
                        <h5 className="about-text-title">INTERESTS</h5>
                        <hr/>
                        <div className="about-text-content">
                            <p>My personal interests include:</p>
                            <ul>
                                <li><strong>Full-Stack Development:</strong> I love being involved in a project from start to finish and understand the ins and outs of how everything fits and works together</li>
                                <br/><li><strong>Building:</strong> I have a passion for building in both the digital and physical world! Whether it be programming, designing, knitting, or sewing, I'm always looking for new ways to get creative and innovative</li>
                                <br/><li><strong>Deep Learning:</strong> I recently had the priviledge of exploring the concept of neural networks on an 8-month research project. This is something that deeply interests me that I am continuing learning through online courses/resources</li>
                                <br/><li><strong>Languages:</strong> Learning new languages is a passion of mine that extends even beyond software development. In addition to the programming languages I'm experienced in, I'm also fluent in English, French, and Romanian! I'm always practicing new programming languages, and am learning Italian in my spare time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default About;