import * as React from "react";
import Hero from '../Components/Hero';
import portfolio from '../portfolio';
import { Grid } from 'react-mdl';
import Button from 'react-bootstrap/Button';
import skills from '../skills';
import { Link } from 'react-router-dom'
import {Card, CardText, CardBody, CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';

class Projects extends React.Component{

    state = {
        posts: [],
        error: undefined,
        status: "idle",
        filter: undefined
      };
    
      componentDidMount() {
        this.setState({ status: "loading" });
        Promise.resolve(portfolio.all())
          .then(posts => this.setState({ posts, status: "idle"}))
          .catch(error => this.setState({ status: "error", error }));
      }

    render(){

        if (this.state.status === "loading") return <div>Loading Posts...</div>;
        if (this.state.posts.length <= 0) return <div><Hero title={this.props.title} />No Posts</div>;
        const posts = this.state.filter
          ? this.state.posts.filter(post => post.category.includes(this.state.filter))
          : this.state.posts;
        var num = 0;
        {posts.map(post => (<div> {num += 1}</div>))}

        var message = "";
        if(this.state.filter === undefined){
            message = "Showing all projects. Click on a filter to list them by skill";
        } else if (num == 1){
            message = "Showing " + num + " project filtered by " + this.state.filter;
        } else {
            message = "Showing " + num + " projects filtered by " + this.state.filter;
        }

        return(
            <div className="testtt">
                <Hero title="Projects" text2=" " />
                <div>
                    <ul>
                        <button className="skills-buttons" onClick={() => this.setState({ filter: undefined })} title="Show all projects">
                            SHOW ALL
                        </button>
                        {skills.map(skills => (
                            <button className="skills-buttons" onClick={() => this.setState({ filter: skills.name })} title={"Filter by " + skills.name}>{skills.name}</button>
                        ))}
                    </ul>

                    <p className="portfolio-message">{message}</p>
                    <div className="testing">
                        <div className="testing1">
                        {posts.map(post => (
                            <div className="hello" style={{width: '345px', margin: '5px', border: '1px solid #ff7675', 'background-color': '#fff'}}>
                                <a style={{color: '#ff7675', height: '35px', 'font-size': '32px', 'font-family': 'Lato', 'margin': ' 1.5px 15px', 'display': 'flex', 'flex-direction': 'column'}} href={`/projects/${post.name}`}>{post.name}</a>
                                <time style={{color: '#777', 'font-family': 'Lato', 'font-size': 'small', 'margin': '20px' }}>{post.date}</time>
                                <CardTitle style={{color: '#fff', 'margin-top': '10px', height: '250px', 'border-top': '1px solid #ff7675', 'border-bottom': '1px solid #ff7675', 'background': 'url(' + post.mainImage + ') center / cover'}}></CardTitle>
                                <CardText style={{margin: '20px 5px', color: 'grey', "font-family": 'Lato'}}>
                                    {post.description}
                                </CardText>
                                <div className="desc-container">
                                    <a className="desc" href={post.github} rel="noopener noreferrer" target="_blank">GitHub</a>
                                    <a className="desc" href={`/projects/${post.name}`}>Learn More</a>
                                </div>
                                <CardMenu style={{color: '#fff'}}>
                                </CardMenu>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;

