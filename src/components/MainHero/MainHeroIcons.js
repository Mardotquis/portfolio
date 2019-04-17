import React from 'react';

const MainHeroIcons = (props) => {

    const { iconPath, iconLink } = props;
    const grabPath = { backgroundImage: `url(${iconPath})` };
    return (
        <a href={iconLink} className="mainhero__icons" style={grabPath} target="_blank" rel="noopener"></a>
    )
};

export default MainHeroIcons;