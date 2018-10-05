import React from 'react';

const ProjectsCard = (props) => {
    const { projectName, projectDescription, projectImgPath } = props;
    const grabPath = { backgroundImage: `url(${projectImgPath})` };
    return (
        <div className="projects__card" style={grabPath}>
            <div className="project_card_information">
                <h3 className="project__name">{projectName}</h3>
            </div>
        </div>
    )
};

export default ProjectsCard;