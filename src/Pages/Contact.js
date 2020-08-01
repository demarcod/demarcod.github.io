import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class Contact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    handleSubmit(e){
        e.preventDefault();
        Axios({
            method: "POST",
            url: "http://localhost:3030/send",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            } else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }
    
    render() {
        localStorage.clear()
        return(
            <div>
                <Hero title={this.props.title} text3=" "/>
                {/*
                <Content>
                    <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}></Form.Control>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={!this.state.email || !this.state.message || !this.state.name}>
                            Send
                        </Button>


                    </Form>

                </Content>
                */}
                <div className="contact-link">
                    <a href="mailto:donnatella.maria@gmail.com?" title="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://github.com/demarcod" title="Github" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/donnatella/" title="LinkedIn" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                    <a href="https://www.facebook.com/donnatella.demarco" title="Facebook" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                </div>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default Contact;