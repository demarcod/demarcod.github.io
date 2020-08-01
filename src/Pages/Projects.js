import * as React from "react";
import Hero from '../Components/Hero';
import portfolio from '../portfolio';
import skills from '../skills';
import { CardText, CardTitle, CardMenu } from 'react-mdl';


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
        window.scrollTo(0, 0)
    }

    setLocalID(localID){
        localStorage.setItem('name', localID);
    }

    render(){
        
        localStorage.clear()
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
            <div>
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

                        <div className="project-card">
                        {posts.map(post => (
                            <div className="project-card-item">
                                <a className="project-card-name" href=".#/projects-details" onClick={() => this.setLocalID(post.name)}>{post.name}</a>
                                <time className="project-card-date">{post.date}</time>
                                <CardTitle className="project-card-image" style={{'background': 'url(' + post.mainImage + ') center / cover'}}>
                                    <div className="project-tags">
                                            <a className="project-tags-text" href=".#/projects-details" onClick={() => this.setLocalID(post.name)}>
                                                {post.category.map(function(name, index){
                                                    return <p className="title project-tag" key={ index }>{name}</p>;
                                                })}
                                            </a>
                                    </div>
                                </CardTitle>
                                <CardText className="project-card-description">
                                    {post.description}
                                </CardText>
                                <div className="project-card-links">
                                    <a className="project-card-link" href={post.github} rel="noopener noreferrer" target="_blank">GitHub</a>
                                    <a className="project-card-link" href=".#/projects-details" onClick={() => this.setLocalID(post.name)}>Learn More</a>
                                </div>
                                <CardMenu style={{color: '#fff'}}>
                                </CardMenu>
                            </div>
                        ))}
                        </div>

                </div>
            </div>
        );
    }
}

export default Projects;

