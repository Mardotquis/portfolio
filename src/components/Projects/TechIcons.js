import React from 'react';


const TechIcons = (props) => {
    const { iconCaption, iconPath } = props;
    const grabPath = { backgroundImage: `url(${iconPath})` };
    return (
        <div className="tech__icons">
            <div className="tech__icons-background" style={grabPath}></div>
            <p>{iconCaption}</p>
        </div>
    )
};

export default TechIcons;