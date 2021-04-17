import React, { Component } from 'react';

import TrendingCourse from './TrendingCourse';

class Trending extends Component {
    render() {
        return (
            <div>
                <h2 className="Trending_title">Trending Courses</h2>
                <hr className="Trending_line"></hr>
                <div className="Flex_container">
                    <TrendingCourse />
                    <TrendingCourse />
                    <TrendingCourse />
                    <TrendingCourse />
                </div>
            </div>
        );
    }
}

export default Trending;