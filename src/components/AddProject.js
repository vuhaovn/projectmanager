import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: {}
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    let category = this.refs.category.value;
    if (title === '') {
      alert('Title is required');
    } else {
      this.setState({
        newProject: {
          id: uuid(),
          title: title,
          category: category
        }
      }, () => {
        this.props.getNewProject(this.state.newProject);
      });
    }
  }

  render() {
    let categoryOption = this.props.categories.map((category, index) => {
      return (
        <option key={index}>{category}</option>
      )
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form id="myForm" onSubmit={this.handleSubmit.bind(this)}>
          <dl><dt>Title</dt><dd><input type="text" ref="title" /></dd></dl>
          <dl>
            <dt>Category</dt>
            <dd>
              <select ref="category">
                {categoryOption}
              </select>
            </dd>
          </dl>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

AddProject.defaultProps = {
  categories: ['Web Design', 'Mobile Development', 'Web Development']
};

export default AddProject;