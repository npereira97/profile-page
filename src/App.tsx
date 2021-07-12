import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/col.css';
import './css/main.css';
import './css/vars.css';

function App() {
  return (

    <div className='background'>
    <div className='resume'>
      <div className="top-header">
            <div className="main-title">Neil Pereira</div>

            <div className="links">
                <span className="title-link"> Phone
                    <a href="tel:514-358-4221"> 514-358-4221</a>
                      </span>
                <span className="title-link"> Github
                        <a href="https://www.github.com/npereira97"> www.github.com/npereira97</a>
                      </span>
                <span className="title-link"> E-mail
                        <a href="mailto:nfpereira97@gmail.com"> nfpereira97@gmail.com</a>
                       </span>
                <span className="title-link"> LinkedIn
                    <a href="https://www.linkedin.com/in/neilpereira97"> www.linkedin.com/in/neilpereira97</a>
                     </span>
            </div>


            <p className="statement">Recent graduate in Mathematics & Computer Science looking for my first fulltime software developer role.
                Interested in type theory, functional programming and Full Stack development.  </p> 


        </div>

        <div className="right-bar">
            <div className="right-col">
                <div className="section-title">Projects</div>
                <hr></hr>


                <div>
                    <div className="sub-title">Golang Compiler</div> 
                    <ul>
                        <li>Designed a compiler for the Go language as the final design project for a compiler design className </li>
                        <li>Written in C, Bison & Flex</li>
                        <li>Implemented the typecheck & target code generation phases </li>
                    </ul>
                </div>


                <div>
                    <div className="sub-title">LearnOCaml Extension</div> 
                    <ul>
                        <li>Coded an extension to an online learning platform used in an introductory functional programming course at McGill University
                            that provides users immediate code performance feedback
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="sub-title">Program Clustering Tool</div> 
                    <ul>
                        <li>Created a novel code clustering technique using static & dynamic code analysis
                        that correctly groups OCaml programs based on semantic similarities </li>
                    </ul>
                </div>



                <div className="section-title">Programming Languages & Software</div>
                <hr></hr>

                <div>
                    <ul>
                        <li><span className="dark">Experienced:</span> C, Java, OCaml, Haskell, Python</li>
                        <li><span className="dark">Some knowledge:</span> SQL, C++, Bash, Docker, git, HTML, CSS, Javascript, React, MongoDB </li>
                    </ul>
                </div>


                <div className="section-title">Achievements</div>
                <hr></hr>

                <div>
                    <ul>
                        <li><span className="dark">Research funding: </span>Rubin Gruber Science Undergraduate Research Award (2020)</li>
                        <li><span className="dark">Dean's Honor List 2018 </span> McGill </li>
                    </ul>
                </div>

                <div className="section-title">Languages</div>
                <hr></hr>
                

                 

                <div>
                    <ul>
                        <li ><span className="dark">English </span> Native </li>
                        <li><span className="dark">French </span> Intermediate </li>
                    </ul>
                </div> 

            </div>
        </div>

        <div className='main-col'>
            <div className="section-title">Education</div>
            <hr></hr>

            <div>
                <div className="sub-title"> Bachelor of Science: First Class Honors Mathematics & Computer Science <div className="duration">2017-08 - 2021-05</div></div> 
                <div className="location">McGill University, Montreal</div>
                <div className="GPA">GPA: 3.84/4.0</div>
                <ul>
                    <li>CS courses in Compiler Design, Algorithms & Data
                        Structures, Programming Languages &
                        Paradigms, Distributed Systems and Type Theory
                        </li>
                    <li>
                        Math courses in Advanced Functional Analysis, Vector Calculus,
    Abstract Algebra, Probability & Statistics

                    </li>
                </ul>
            </div>

            <div className="section-title">Work Experience</div>
            <hr></hr>


            <div className="work-block ">
                <div className="sub-title"> Summer Research Assistant <div className="duration">SUMMER 2020</div></div> 
                <div className="location">McGill University, Montreal</div>
                <ul>
                    <li>Investigated the utility of a static code analyzer (Resource Aware ML) in student feedback generation</li>
                    <li>Integrated the analyzer into an online learning platform (LearnOCaml)</li>
                    <li>Executed stress tests to gauge extension scalability</li>
                    <li>Implemented in OCaml, Docker & JS</li>
                </ul>
            </div>
            

            <div className="work-block ">
                <div className="sub-title">Tomlinson Engagement Award Mentor (TEAM) COMP 302 <div className="duration">FALL 2020, WINTER 2021 Semesters</div></div> 
                <div className="location">McGill University, Montreal</div>
                <ul>
                    <li>Designed quiz & assignment questions</li>
                    <li>Guided 5-10 students 2 hours every week</li>
                    <li>Taught students key functional programming concepts</li>
                    <li>Answered questions on course discussion boards</li>
                </ul>
            </div>
            

            <div className="work-block ">
                <div className="sub-title">CS Helpdesk Tutor<div className="duration">FALL 2019, WINTER 2020, FALL 2020 Semesters</div></div> 
                <div className="location">McGill University, Montreal</div>
                <ul>
                    <li>Tutored students in introductory CS concepts</li>
                    <li>Helped 5-10 students 2 hours every week</li>
                    <li>Worked with students in Java, Bash, Python, C, Ocaml, MIPS</li>
                    <li>Debugged & tested student code</li>
                </ul>
            </div>
            

        </div>
    </div>

    </div>
    
  );
}

export default App;
