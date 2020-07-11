import React from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../Assets/Images/avatar.png';

console.log(avatar);

function Home(props){
    return(
        <div style={{width: '100%'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="wow animate__animated animate__fadeInDown">
                        <img className="avatar-img" src={require('../Assets/Images/avatar.png')} />
                        <h1>Donnatella DeMarco</h1>
                        <h6 className="home-desc">Welcome! I'm a passionate Software Developer always on the lookout for a new challenge.<br/>
                        Feel free to browse around!</h6>
                        <div className="social-links wow animate__animated animate__bounce" data-wow-delay="1s">
                            {/* GitHub */}
                            <a href="https://github.com/demarcod" title="Github" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/donnatella/" title="LinkedIn" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/missdonnatella/" title="Instagram" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram" aria-hidden="true" />
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/donnatella.demarco" title="Facebook" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-facebook" aria-hidden="true" />
                            </a>
                            {/* Hackerrank*/}
                            <a href="https://www.hackerrank.com/donnatella?hr_r=1" title="Hackerrank" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-hackerrank" aria-hidden="true" />
                            </a>
                            {/* FreeCodeCamp */}
                            <a href="https://www.freecodecamp.org/demarcod" title="FreeCodeCamp" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-free-code-camp" aria-hidden="true" />
                            </a>                                                                                                
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Home;