import React from 'react';

import Container from 'react-bootstrap/Container';
import { Grid, Cell } from 'react-mdl';
import avatar from '../Assets/Images/avatar.png';

import Hero from '../Components/Hero';

console.log(avatar);

function Home(props){

    return(
        <div style={{width: '100%'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img className="avatar-img" src={require('../Assets/Images/avatar.png')} />
                </Cell>
            </Grid>
        </div>
    );
}

export default Home;