import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li>
        {this.props.data.title} &minus; [<strong>{this.props.data.category}</strong>]
        <a href="#" onClick={this.deleteProject.bind(this, this.props.data.id)}>Delete</a>
      </li>
    )
  }
}

export default ProjectItem;