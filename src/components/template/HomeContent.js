import React from 'react'
import html5 from '../../assets/img/html5.png'
import react from '../../assets/img/react.png'
import css3 from '../../assets/img/css3.png'
import bootstrap from '../../assets/img/bootstrap.png'
import materialize from '../../assets/img/materialize.png'
import javascript from '../../assets/img/javascript.png'
import jquery from '../../assets/img/jquery.png'
import github from '../../assets/img/github.png'
import photoshop from '../../assets/img/photoshop.png'
import hubspot from '../../assets/img/hubspot.png'
import project from '../../assets/img/ProjectManagement.jpg'

const HomeContent = () => {



    return (
        <>
            <section id="about">
                <div className="section">
                    <div className="heading">
                        <h2>ABOUT</h2>
                        {/* <p>
                            I am a software engineer approx 2 years of experience.My primary skill is react js ,redux and secondary skill is java, springBoot.I always love to learn new technology and tools. I am valuable team player with personable and dedicated nature. I am flexible and adaptable also.I loves programming and problem solving. I completed my btech from 'Jaipur engineering college and research centre'. I completed my 12th standard from 'R.k.d College patna'. I completed my scholling and 10th standard from my native place 'R.s.high school parasauni farm'. I like traveling and cooking. I am a fitnessfreak also ,i love exercise daily.
                        </p> */}
                    </div>

                    <div class="container flex">
                        <div class="row">
                            <div class="col-sm-3">
                                <div className="cm_card">
                                    <div class="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x">
                                        <div class="hexagon"> <i class="mdi mdi-speedometer"></i>
                                        </div>
                                    </div>
                                    <div class="waypoint animated fade-in" data-animation="fade-in">
                                        <div class="label bold">Fast</div>
                                        <div>Fast load times and lag free interaction, my highest priority.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div className="cm_card">
                                    <div class="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x" data-delay=".2s" >
                                        <div class="hexagon"> <i class="mdi mdi-cellphone-link"></i>
                                        </div>
                                    </div>
                                    <div class="waypoint animated fade-in" data-animation="fade-in" data-delay=".2s" >
                                        <div class="label bold">Responsive</div>
                                        <div>My layouts will work on any device, big or small.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div className="cm_card">
                                    <div class="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x" data-delay=".4s" >
                                        <div class="hexagon"> <i class="mdi mdi-lightbulb-outline"></i>
                                        </div>
                                    </div>
                                    <div class="waypoint animated fade-in" data-animation="fade-in" data-delay=".4s" >
                                        <div class="label bold">Intuitive</div>
                                        <div>Strong preference for easy to use, intuitive UX/UI.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div className="cm_card">
                                    <div class="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x" data-delay=".6s" >
                                        <div class="hexagon"> <i class="mdi mdi-rocket"></i>
                                        </div>
                                    </div>
                                    <div class="waypoint animated fade-in" data-animation="fade-in" data-delay=".6s" >
                                        <div class="label bold">Dynamic</div>
                                        <div>Websites don't have to be static, I love making pages come to life.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <section id="skills" class="section scrollspy">
                    <div className="heading">
                        <h2>Skills</h2>
                    </div>
                    <div class="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div class="card">
                                    <div class="card-content">
                                        <h4 class="brown-text light">HTML</h4>
                                        <div class="row text-center">
                                            <div class="col s4 m2">
                                                <img alt="" src={html5} class="responsive-img" />HTML5</div>
                                            <div class="col s4 m2">
                                                <img alt="" src={react} class="responsive-img" />JSX</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="card">
                                    <div class="card-content">
                                        <h4 class="brown-text light">CSS</h4>
                                        <div class="row text-center">
                                            <div class="col s4 m2">
                                                <img alt="" src={css3} class="responsive-img" />CSS3</div>

                                            <div class="col s4 m2">
                                                <img alt="" src={bootstrap} class="responsive-img" />Bootstrap</div>

                                            <div class="col s4 m2">
                                                <img alt="" src={materialize} class="responsive-img" />Materialize</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="card">
                                    <div class="card-content">
                                        <h4 class="brown-text light">Javascript</h4>
                                        <div class="row text-center">
                                            <div class="col s4 m2">
                                                <img alt="" src={react} class="responsive-img" />React</div>
                                            <div class="col s4 m2">
                                                <img alt="" src={javascript} class="responsive-img" />Javascript</div>
                                            <div class="col s4 m2">
                                                <img alt="" src={jquery} class="responsive-img" />jQuery</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="card">
                                    <div class="card-content">
                                        <h4 class="brown-text light">CMS</h4>
                                        <div class="row text-center">
                                            <div class="col s4 m2">
                                                <img alt="" src={hubspot} class="responsive-img" />Hubspot</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="card">
                                    <div class="card-content">
                                        <h4 class="brown-text light">Other</h4>
                                        <div class="row text-center">
                                            <div class="col s4 m2">
                                                <img alt="" src={github} class="responsive-img" />Github</div>

                                            <div class="col s4 m2">
                                                <img alt="" src={photoshop} class="responsive-img" />Photoshop</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects section" id="projects">
                    <div className="heading">
                        <h2>Projects</h2>
                    </div>
                    <div className="container">
                        <div class="card-deck">
                            <div class="card">
                                <div className="imgwrapper">
                                    <a href="#" className="cardurl">
                                        <img class="card-img-top" src={project} alt="Card image cap" />
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="btnwrapper">
                                        <button className="btn btn-primary">github</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div className="imgwrapper">
                                    <a href="#" className="cardurl">
                                        <img class="card-img-top" src={project} alt="Card image cap" />
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <div className="btnwrapper">
                                        <button className="btn btn-primary">github</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div className="imgwrapper">
                                    <a href="#" className="cardurl">
                                        <img class="card-img-top" src={project} alt="Card image cap" />
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <div className="btnwrapper">
                                        <button className="btn btn-primary">github</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default HomeContent  
