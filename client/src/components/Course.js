import React, { Component } from 'react'

export default class Course extends Component {
  render() {
    const project = this.props.project;
    console.log(project)

    return (
      <div>
        <p>{project.id}</p>
      </div>
    )
  }
}
