import React from 'react';
import Hero from '../Components/Hero';
import { Grid } from 'react-mdl';

class Projects extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Hero title={this.props.title} />
            </div>
 
        );
    }
}

export default Projects;