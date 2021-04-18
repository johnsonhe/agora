import React, { Component } from 'react';

import TrendingCourse from './TrendingCourse';

class CourseList extends Component {
  render() {
    return (
      <div>
        <h2 className="Trending_title">Courses</h2>
          <hr className="Trending_line"></hr>
          <div className="row flex">
            <div className="col-3">
              <TrendingCourse />
            </div>
            <div className="col-3">
              <TrendingCourse />
            </div>
            <div className="col-3">
              <TrendingCourse />
            </div>
            <div className="col-3">
              <TrendingCourse />
            </div>
          </div>
      </div>
    );
  }
}

export default CourseList;