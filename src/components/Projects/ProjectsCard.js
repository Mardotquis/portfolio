import React from 'react';

const ProjectsCard = (props) => {
    const { projectName, projectDescription, projectImgPath } = props;
    const grabPath = { backgroundImage: `url(${projectImgPath})` };
    return (
        <div className="projects__card" style={grabPath}>
            <div className="project_card_information">
                <h3 className="project__name">{projectName}</h3>
                <p className="project__description">{projectDescription}</p>
                <div className="project__icons">
                    <div className="project__icons-wrapper">
                        <a href="" className="github__icon"></a>
                        <p className="project__icon-text">Visit GitHub </p>
                    </div>
                    <div className="project__icons-wrapper">
                        <a href="" className="website__icon"></a>
                        <p className="project__icon-text">Visit Website</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ProjectsCard;