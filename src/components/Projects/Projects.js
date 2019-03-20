import React from 'react';
import ProjectsCard from "./ProjectsCard";
import TechIcons from './TechIcons';
import Challenges from "./Challenges";



const Projects = (props) => {

    const { backgroundIcons, projectInformation, challenges } = props;
    return (
        <section id="projects">
            <h2 className="section__header__primary">Projects</h2>
            <div>
                <h3 className="projects__header__secondary">What I've Learned</h3>
                <div className="tech__icon-wrapper">
                    {backgroundIcons.map(icon => {
                        return (
                            <TechIcons
                                iconCaption={icon.iconCaption}
                                iconPath={icon.iconPath}
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                {projectInformation.map(info => {
                    return (
                        <ProjectsCard
                            projectName={info.projectName}
                            projectDescription={info.projectDescription}
                            projectImgPath={info.projectImgPath}
                            githubLink={info.githubLink}
                            websiteLink={info.websiteLink}

                        />
                    )
                })}
            </div>
            {/* <h3 className="challenges__header_primary">Extra Challenges</h3> */}
            {/* <div className="challenges">
            {challenges.map(info=>{
                return(
                    <Challenges
                    projectName={info.projectName}
                    projectDescription={info.projectDescription}
                    projectImgPath={info.projectImgPath}
                    />
                )
            })}
            </div> */}
        </section>
    );
};

export default Projects;
