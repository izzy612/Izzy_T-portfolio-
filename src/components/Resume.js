import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <br />
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="columns download">
            <p>
              <a
                href="https://docs.google.com/document/d/1aqfhbKqevJQfVxGPsBL4ncuDgd2vwbFBtIBmnZ_vYq0/edit"
                className="button"
              >
                <i className="fas fa-download" />Download Resume
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <ul className="list-inline dev-icons">
            <i className="fab fa-html5 fa-5x" />
            &nbsp;
            <i className="fab fa-css3-alt fa-5x" />
            &nbsp;
            <i className="fab fa-js-square fa-5x" />
            &nbsp;
            <i className="fab fa-react fa-5x" />
            &nbsp;
            <i className="fab fa-node-js fa-5x" />
            &nbsp;
            <i className="fab fa-npm fa-5x" />
            &nbsp;
            <i className="fab fa-bootstrap fa-5x" />
            &nbsp;
            <i className="fab fa-github-square fa-5x" />
          </ul>

          <p>
            Express
            <i class="fas fa-dot-circle " />
            jQuery
            <i class="fas fa-dot-circle" />
            MySql - Sequelize
            <i class="fas fa-dot-circle" />
            MongoDB - Mongoose
            <i class="fas fa-dot-circle" />
            Firebase
            <i class="fas fa-dot-circle" />
            Handlebars
            <i class="fas fa-dot-circle" />
            JSON
            <i class="fas fa-dot-circle" />
            APIs
            <i class="fas fa-dot-circle" />
            Ajax
            <i class="fas fa-dot-circle" />
            Mobile-First, Responsive Design
          </p>
        </div>
      </section>
    );
  }
}
