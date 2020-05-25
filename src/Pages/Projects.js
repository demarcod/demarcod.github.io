import * as React from "react";
import Hero from '../Components/Hero';
import portfolio from '../portfolio';
import { Grid } from 'react-mdl';
import Button from 'react-bootstrap/Button';
import skills from '../skills';

class Projects extends React.Component{

    state = {
        posts: [],
        error: undefined,
        status: "idle",
        filter: undefined
      };
    
      componentDidMount() {
        this.setState({ status: "loading" });
        Promise.resolve(portfolio)
          .then(posts => this.setState({ posts, status: "idle" }))
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
            message = "Showing all projects. Click on a button above to filter by skill";
        } else if (num == 1){
            message = "Showing " + num + " project filtered by " + this.state.filter;
        } else {
            message = "Showing " + num + " projects filtered by " + this.state.filter;
        }

        return(
            <div>
                <Hero title={this.props.title} />
                <div>
                    <ul>
                        <Button className="skills-buttons" onClick={() => this.setState({ filter: undefined })}>
                            SHOW ALL
                        </Button>
                        {skills.map(skills => (
                            <Button className="skills-buttons" onClick={() => this.setState({ filter: skills.name })} title={"Filter by " + skills.name}>{skills.name}</Button>
                        ))}
                    </ul>

                    <p>{message}</p>
                    {posts.map(post => (
                        <div>
                            <p>{post.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;

