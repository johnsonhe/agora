import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CourseData() {
  const [proposals, setProposals] = useState();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/api/proposal'
    }

    axios.request(options)
      .then(res => {
        setProposals(res.data);
      })
      .catch(err => console.error(err));
  }, [setProposals]);

  return (
    <div className="card bg-light" style={{"height": "650px"}}>
      <div className="card-body">
        <h5 className="card-title">Courses</h5>
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        <h5 className="card-title mt-3">My Created Course</h5>
        <CourseProposalsList proposals={proposals} />
      </div>
    </div>
  );
}

const CourseProposalsList = (props) => {
  let proposals;

  if (props.proposals) {
    proposals = props.proposals.map((proposal, index) => {
      return <Link className="list-group-item btn" key={index} to={`/editcourse:${proposal.id}`}>{proposal.title}</Link>
    });
  }
  
  return (
    <ul className="list-group">
      {proposals}
    </ul>
  )
}

export default CourseData;