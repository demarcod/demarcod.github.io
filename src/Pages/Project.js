import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects";
import Details from "./Details";

const Project = () => (
  <Switch>
    <Route exact path="/projects" component={Projects} />
    <Route path="/projects/:name" component={Details} />
  </Switch>
);

export default Project;
