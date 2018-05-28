import React, { Component } from 'react';
import uuid from 'uuid';
import Project from './components/Project';
import AddProject from './components/AddProject';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        { id: uuid(), title: 'Business Website', category: 'Web Design' },
        { id: uuid(), title: 'Social App', category: 'Mobile Development' },
        { id: uuid(), title: 'Ecommerce Shopping Cart', category: 'Web Development' }
      ]
    })
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    var index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Project Manager</h1>
        <AddProject getNewProject={this.handleAddProject.bind(this)}/>
        <Project onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
