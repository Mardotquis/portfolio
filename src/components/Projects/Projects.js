import React from 'react';
import ProjectsCard from "./ProjectsCard";
import TechIcons from './TechIcons';


const Projects = (props) => {
    const { backgroundIcons } = props;
    return (
        <section id="projects">
            <h2 className="section__header__primary">Projects</h2>
            <div>
                <h3>What I've Learned</h3>
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
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
        </section>
    );
};

export default Projects;
