import React, { Component } from 'react';
import '../../styles/Projects.scss';
import ProgressBar from './ProgressBar';
import _ from "lodash";

export default class Projects extends Component {

  componentDidMount() {
    // window.addEventListener('wheel', _.throttle((evt) => { 
    //   console.log(evt.path);
    //   const project = document.getElementsByClassName("project")[0],
    //         progressBar = document.getElementsByClassName("progress-bar-container")[0];

    //   if(evt.path.includes(document.getElementsByClassName("projects")[0])){
    //     //Set projects animations
    //     progressBar.classList.add('show-left');
    //     project.classList.add('show-right');

    //   }
    // }, 1000));

    // console.log(document.getElementsByClassName("progress-bar-container")[0].offsetTop);

    
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center pt-5 pb-5">Projects</h1>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-3 relative">
              <div className="company-data">
                <div className="company-date">09/2018 - *</div>
                <div className="company-name">Asseco PST</div>
              </div>
            </div>
            <div className="col-9">
            <div className="project-container">
              <div className="project">
                <div className="project-img"></div>
                <div className="project-description">
                <p>Development of <b>Banks Institutional Websites</b> using a CMS. The project consists in creating the website according to the design team drawing. Development of an exchange widget component hosted by an HTTP Application Server.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>dotCMS</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>

              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>
                  Development of a <b>Banking Correspondents</b> platform (Angular JS):
                  Development of the front-end using Angular JS. The project consists in creating the pages of the solution using Angular, CSS and HTML. The tasks are defined in JIRA and the documentation in Confluence. The project uses GIT for version controlling and collaboration, using the Gitflow methodology. The front-end and back-end communications are possible using RESTfull webservices.  
                  </p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>Angular JS</li>
                  <li>HTML, CSS and Bootstrap</li>
                  <li>JIRA and Confluence</li>
                  <li>GIT</li>
                  <li>REST</li>
                  <li>Swagger</li>
                  <li>API Endpoints</li>
                </ul>
                </div>
              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>Development of a <b>Banking Correspondents</b> platform (React):
                Development of the front-end using React. The project consists in creating the pages of the solutions using React (Functional based), CSS and HTML. The tasks are defined in JIRA and the documentation in Confluence. The project uses GIT for version controlling and collaboration, using the Gitflow methodology. The front-end and back-end communications are made with RESTfull webservices. In the front-end the data is retrieved accessing the API endpoints in JSON. The APIs are tested using Swagger. The application server is Wildfly.
                </p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>React</li>
                  <li>HTML, CSS and Bootstrap</li>
                  <li>JIRA and Confluence</li>
                  <li>GIT</li>
                  <li>REST</li>
                  <li>Swagger</li>
                  <li>API Endpoints</li>
                </ul>
                </div>
              </div>


            </div>

            </div>
          </div>

          <div className="row mt-5 pb-5">
            <div className="col-3 relative">
              <div className="company-data">
                <div className="company-date">03/2018 - 09/2018</div>
                <div className="company-name">NO SHAPE</div>
              </div>
              
            </div>
            <div className="col-9">
            <div className="project-container">
              <div className="project">
              <div className="project-description">
                <p>Development of an <b>internal prize rewards</b> web application. The development was made using .NET, Javascript, HTML, Bootstrap and CSS. The database was SQL Server.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>.NET</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                  <li>SQL Server</li>
                </ul>
                </div>

              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>Development of the <b>Portuguese Football Federation</b> fans and associates Website (Portugal +) front-end (design). The development was made using Javascript, JQuery, HTML, Bootstrap and CSS.
  
                  </p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>
              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>Development of <b>Efacec Image and Video gallery Website</b> front-end. The development was made using .NET, Javascript, JQuery, HTML, Bootstrap and CSS.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>.NET</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>
              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>Maintenance of Sonae solutions front-end. The software was developed in PHP (Laravel), Javascript, HTML and CSS. The project consisted in bug fixing mainly in the front-end.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>PHP (Laravel)</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>
              </div>


            </div>

            </div>
          </div>

          <div className="row mt-5 pb-5">
            <div className="col-3 relative">
              <div className="company-data">
              
                <div className="company-name">Education and Courses</div>
              </div>
              
            </div>
            <div className="col-9">
            <div className="project-container">
              <div className="project">
              <div className="project-description">
                <p className="company-date">2016 - 2017</p>
                <p><b>ATEC</b></p>
                <p>Technical Specialist In Technologies And Systems Programming</p>
                </div>

              </div>
              <div className="project">
              <div className="project-description pt-5">
                <p className="company-date">2019</p>
                <p><b>Affinity</b></p>
                <p>Affinity React Intermediate Course</p>
                </div>

              </div>
              <div className="project">
              <div className="project-description pt-5">
                <p className="company-date">2019</p>
                <p><b>Affinity</b></p>
                <p>Affinity React Begginer Course</p>
                </div>

              </div>
              <div className="project">
              <div className="project-description pt-5">
                <p className="company-date">2019</p>
                <p><b>Affinity</b></p>
                <p>Affinity Javascript ES6 Course</p>
                </div>

              </div>


            </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}
