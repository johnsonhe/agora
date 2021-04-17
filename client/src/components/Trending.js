import React, { Component } from 'react';

import TrendingCourse from './TrendingCourse';

class Trending extends Component {
  render() {
    return (
      <div>
        <h2 className="Trending_title">Trending Courses</h2>
          <hr className="Trending_line"></hr>
          <div className="row">
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

export default Trending;