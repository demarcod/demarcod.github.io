import React from 'react';
import Hero from '../Components/Hero';
import { Grid } from 'react-mdl';
import Timeline from '../Components/Timeline'

class Experience extends React.Component{

    render(){
        return(
            <div>
                <Hero className="testing" title={this.props.title}
                text=" "/>
                <div className="experience-body">
                    <Timeline />
                </div>
            </div>
        );
    }
}

export default Experience;