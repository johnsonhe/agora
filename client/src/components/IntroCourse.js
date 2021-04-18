import React from 'react'

export default function IntroCourse(props) {
  const agoToken = props.contracts.agoToken;
  const address = props.address;


  

  /**
 * calls mint token function on AGOToken smart contract
 */
    const handleFinish = () => {
    agoToken.methods.mintTokensOnIntroCourseCompletion().send({from: address})
      .on('receipt', receipt => {
        const transferEvent = receipt.events.Transfer
        const tokenValue = transferEvent.returnValues.value;
        console.log(tokenValue)
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="card mb-4">
      <div >
        <h2 className="Trending_course_title">Intro Course</h2>
        <hr></hr>
        <p className="Course_desc">THE IDEA <br></br><br></br>
Agora - an online learning platform where users collaborate to create their own virtual learning communities, or Agorums, which revolve around open source education content, ie, users work together to create courses. These communities enable users to take courses with each other in cohorts, spread their knowledge and goodwill by becoming mentors, or take charge of their own learning by voting on community proposals.
<br></br>
You can think of Agora like this: Udemy + Github = Agora.
<br></br>
On Github, developers collaborate to create software together, in part of something called “open source software”, which is based on a gift economy--doing it mostly out of intrinsic motivation. On Udemy, users can create and upload video courses, which other users will then take. Agora takes the “open-source-community-collaboration” model of Github, but instead of software, users collaborate to create courses. 
<br></br>
In a nutshell, we marry the architectural framework of Github with the content of Udemy to create a new model of online education that we call: open source learning.
<br></br>
Why will the crowdsourcing of educational content work? First, we already see many examples where tapping into the “wisdom of the crowd” has created massive success. Take for example Wikipedia or Quora. Secondly, we see many people are willing to collaborate and help others out online, such as on Github or StackExchange. Finally, we see a growing move towards the “online”, and if education wants to keep up, it needs to innovate. With the proper inventization schemes put into place to guide the wisdom of the crowd, we can create an engaging e-learning platform that helps out all those seeking to learn.
<br></br><br></br>Walkthrough<br></br><br></br>
Stage 1: Creation & Launch<br></br>
First, users draft a course proposal--documents detailing the vision and plans of their course. This is posted on the “course proposals” page (bulletin board style listing).
Optionally, creators can also start creating the actual content of their course, to really give users an idea of what it will look like
<br></br>Then, community members give feedback to the creators through comments. Users can signal interest by voting. Extremely invested users can stake tokens to support the creators through a crowdfunding scheme.
<br></br>Once the crowdfunding goal (set by creators) is reached and the course content is created an “official” Agorum is launched.
<br></br>An Agorum is a “course subcommunity” and consists of: course content, forum
<br></br>Now people can start joining the new Agorum
<br></br><br></br>
Stage 2: Learning <br></br>
Users can join an Agorum for free and take part in the forums. However, they must pay a token fee to access the course content.
<br></br>Users can take the course in cohorts - classroom sized groups that serve as engaging support networks encouraging accountability and learning from each other. 
<br></br>Each cohort can be led by a mentor, who encourages discourse, answers questions, and guides the cohort to complete the course. 
<br></br>Once users complete the course, they are issued unique digital certificates, whose value is raised by attestations of multiple parties including the mentor, course creators, and even peers.
<br></br><br></br>
Stage 3: Beyond<br></br>
<br></br>Users can continue to be active members of the Agorum by becoming mentors, joining the creators team, helping out students in the forum, or voting on course updates.
<br></br>Of course, they can continue their educational journey by joining other Agorum’s, or one day even creating their own in a topic dear to them.
<br></br><br></br>Summary<br></br>
<br></br>Agora is an educational platform built by learners, for learners. There are three key features we tap into that make our platform innovative. First, by utilizing the wisdom of the crowd, we let the crowd collaborate together to create the best educational content they can. Every group on our platform communicates together to iteratively improve the content and experience. Creators take charge and build the course, while learners and mentors give feedback on how to improve the course during the build process and after it is finished. This allows users to interact directly with the creators, such as proposing new additions to the course, removing repetitive parts, etc. The community will rally behind the good proposals, and they can be voted on and implemented.
<br></br>
Secondly, we use cohorts and mentors to add a social aspect to online learning, and make it more engaging. Cohorts can be matched by skill level, interest, or goals, and these online peers progress through the course together and learn from each other. Mentors are there to guide the cohorts through the course, offering advice, facilitating discussions, and answering any questions. They don’t actually teach the content. Although this virtual classroom learning model is not as engaging as in-person, it is certainly more so than the status quo. Furthermore, we can match learners together by their skill level, interest in subject, and goals for completing the course, thus creating a pod of peers who may learn better together.

 </p>
      </div>
      <div>
      <button className="btn btn-primary m-2" onClick={handleFinish}>Finish Introductory Course</button>
    </div>
    </div>
    
  );

  
}
