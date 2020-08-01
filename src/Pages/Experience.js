import React from 'react';
import Hero from '../Components/Hero';
import Timeline from '../Components/Timeline'

class Experience extends React.Component{

    render(){
        localStorage.clear()
        return(
            <div>
                <Hero title={this.props.title} text=" "/>
                <div>
                    <Timeline />
                </div>
            </div>
        );
    }
}

export default Experience;