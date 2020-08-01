import React from 'react';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import WOW from 'wowjs';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Details from './Pages/Details';

const history = createBrowserHistory();

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    title: "Donnatella DeMarco",
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Experience', path: '/experience' },
      { title: 'Projects', path: '/projects' },
      { title: 'Contact', path: '/contact' }
    ],
    home: {
      title: 'Hello World',
      subTitle: 'My Projects',
      text: 'Checkout my projects below'
    },
    about: {
      title: 'About Me',
    },
    experience: {
      title: 'Experience',
    },
    projects: {
      title: 'Projects'
    },
    contact: {
      title: 'Let\'s Talk'
    },
    details: {
      title: 'Let\'s Talk'
    }
  }
}
componentDidMount(){
  new WOW.WOW().init();
}
  render(){
    return (
      <Router history={history}>
        <Container className="p-0 header-color" fluid={true}>
          <Navbar className="border-bottom header-footer" bg="transparent" expand="lg">
            <Navbar.Brand href="/" className="nav-link">Donnatella DeMarco</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/experience">Experience</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>          
          </Navbar>

          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" render={() => <About title={this.state.about.title}/>} />
          <Route path="/experience" render={() => <Experience title={this.state.experience.title}/>} />
          <Route path="/projects" render={() => <Projects title={this.state.projects.title}/>} />
          <Route path="/projects-details" render={() => <Details title={this.state.details.title}/>} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title}/>} />

          <Footer />

        </Container>
      </Router>
    );
  }

}

export default App;
