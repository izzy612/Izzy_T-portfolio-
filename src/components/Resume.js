import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <br/>
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
       


        <div className="row">
        <div className="three columns header-col">
               <h1><span>Skills</span></h1>
          </div>
          
        <ul className="list-inline dev-icons">
              
            <i className="fab fa-html5 fa-5x"></i>
            
            &nbsp;
           
            <i className="fab fa-css3-alt fa-5x"></i>
             
            &nbsp;
          
            <i className="fab fa-js-square fa-5x"></i>

            &nbsp;

            <i className="fab fa-react fa-5x"></i>

            &nbsp;

            <i className="fab fa-node-js fa-5x"></i>

            &nbsp;

            <i className="fab fa-npm fa-5x"></i>

            &nbsp;

            <i className="fab fa-bootstrap fa-5x"></i>

            &nbsp;

            <i className="fab fa-github-square fa-5x"></i>
          
            </ul>
       
        
            
         <p>
         
            Express
            <i class="fas fa-dot-circle "></i>
            jQuery
            <i class="fas fa-dot-circle"></i>
            MySql - Sequelize
            <i class="fas fa-dot-circle"></i>
            MongoDB - Mongoose
            <i class="fas fa-dot-circle"></i>
            Firebase
            <i class="fas fa-dot-circle"></i>
            Handlebars
            <i class="fas fa-dot-circle"></i>
            JSON
            <i class="fas fa-dot-circle"></i>
            APIs
            <i class="fas fa-dot-circle"></i>
            Ajax
            <i class="fas fa-dot-circle"></i>
            Mobile-First, Responsive Design
            </p>
         
            
           
          
            
          
          
       
          
          
              
          
          
          
          </div>
          
        
         

      </section>
    );
  }
}