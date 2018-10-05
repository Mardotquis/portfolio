import React from 'react';

const ProjectsCard = (props) => {
    const { projectName, projectDescription, projectImgPath } = props;
    return (
        <div className="projects__card">
            <div className="card__left-section">
                <div className="project--background"></div>
            </div>
            <div className="card__right-section">
                <h3>{projectName}</h3>
            </div>
        </div>
    )
};

export default ProjectsCard;