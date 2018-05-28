import React, {Component} from 'react';
import ProjectItem from './ProjectItem';

class Project extends Component {

  handleDelete(id) {
    this.props.onDelete(id);
  }

  render() {

    let projectItem;

    if (this.props.projects) {
      projectItem = this.props.projects.map((project, index) => {
        return (
          <ProjectItem onDelete={this.handleDelete.bind(this)} key={index} data={project}/>
        )
      });
    }

    return (
      <ul>
        {projectItem}
      </ul>
    )
  }
}

export default Project;