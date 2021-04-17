import React, { Component } from 'react';

class Proposal_form extends Component {
    render() {
        return (
            <div>
                <div className="Proposal_container">
                    <h1 className="Proposal_title">Propose a Course.</h1>
                    <div className="Topic_goal">
                        <div className="Topic_div">
                        <label for="exampleFormControlInput1" className="Form_label">Course Topic</label>
                        <input type="topic" class="form-control" id="exampleFormControlInput1" placeholder="Subject 101"/>
                        </div>
                        
                        <div className="Goal_div">
                            <label for="exampleFormControlInput2" className="Form_label">Crowdfund Goal</label>
                            <input type="goal" class="form-control" id="exampleFormControlInput2" placeholder="$0.00"/>
                        </div>      
                    </div>
                    <div className="Desc_div">
                            <label for="exampleFormControlInput3" className="Form_label">Course Description</label>
                            <textarea type="desc" class="form-control" id="exampleFormControlInput3"placeholder="Course Description..."/>
                    </div>
                    <div className="Contributor_deadline">
                            <div className="Contributors_div">
                                <label for="exampleFormControlInput4" className="Form_label">Course Contributors</label>
                                <input type="contributor" class="form-control" id="exampleFormControlInput4" placeholder="Jacob Lagesse, Darian Hu, Vict..."/>
                            </div>
                            <div className="Deadline_div">
                                <label for="exampleFormControlInput5" className="Form_label">Crowdfund Deadline</label>
                                <input type="deadline" class="form-control" id="exampleFormControlInput5" placeholder="4/20/22"/>
                            </div> 
                    </div>
                    <div className="Button_div">
                        <button type="submit" class="btn btn-primary mb-3">Submit.</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Proposal_form;