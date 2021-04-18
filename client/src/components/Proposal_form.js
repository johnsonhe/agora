import React, { Component } from 'react';
import axios from 'axios';

class Proposal_form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      contributors: '',
      categories: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * Creates an course template in p/courseProposalName
   */
  handleSubmit() {
    const options = {
      method: 'POST',
      url: 'http://localhost:8000/',
      data: this.state
    }

    axios.request(options)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  handleInputChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className="Proposal_container">
          <h1 className="Proposal_title">Propose a Course.</h1>
          <div className="Topic_goal">
            <div className="Topic_div">
            <label for="exampleFormControlInput1" className="Form_label">Course Title</label>
            <input type="topic" class="form-control" name="title" placeholder="Subject 101" onChange={this.handleInputChange}/>
            </div>
            <div className="Goal_div">
              <label for="exampleFormControlInput2" className="Form_label">Vote Goal</label>
              <input type="goal" class="form-control" placeholder="100" readOnly/>
            </div>
          </div>
          <div className="Desc_div">
            <label for="exampleFormControlInput3" className="Form_label">Course Description</label>
            <textarea type="desc" class="form-control" name="description" placeholder="Course Description..." onChange={this.handleInputChange}/>
          </div>
          <div className="Contributor_deadline">
            <div className="Contributors_div">
              <label for="exampleFormControlInput4" className="Form_label">Course Contributors</label>
              <input type="contributor" class="form-control" name="contributors" onChange={this.handleInputChange} />
            </div>
            <div className="Deadline_div">
              <label for="exampleFormControlInput5" className="Form_label">Voting Days</label>
              <input type="deadline" class="form-control" id="exampleFormControlInput5" placeholder="30" readOnly/>
            </div> 
          </div>
            <div className="Categories_div">
              <label for="exampleFormControlInput6" className="Form_label">Category</label>
              <input type="categories" class="form-control" name="categories" placeholder="Enter one category your course falls..." onChange={this.handleInputChange}/>
            </div>
          <div className="Button_div m-5">
            <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Proposal_form;