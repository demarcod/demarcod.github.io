import React from 'react';
import Hero from '../Components/Hero';
import { Grid } from 'react-mdl';
import Timeline from '../Components/Timeline'

class About extends React.Component{

    render(){
        return(
            <div>
                <Hero title={this.props.title} />
            </div>
        );
    }
}

export default About;