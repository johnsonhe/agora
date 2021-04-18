import React from 'react';
import { Link } from 'react-router-dom';
import Proposal_form from './Proposal_form';
import CourseList from './CourseList';


function Proposals() {
    return (
      <section className="proposals">
        <div className="container">
            <Proposal_form />
        </div>
      </section>
    );
  }

  export default Proposals;