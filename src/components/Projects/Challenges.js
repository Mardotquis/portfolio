import React, { Component } from "react";

class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { projectName, projectDescription, projectImgPath } = this.props;

        const grabPath = { backgroundImage : `url("${projectImgPath}")`}
        return (

            <div className="challenges__card">
                <div className="challenges__card-background" style={grabPath}></div>
                <div className="challenges__card-hidden">
                <h3 className="challenges__card__header_primary">{projectName}</h3>
                    <p className="challenges__card__text_primary">{projectDescription}</p>
                </div>
            </div>
        )
    }
}

export default Challenges;

// 1. AJAX API (edited)
// 2. NODE API
// 3. React Guessing Game
// 4. First CSS section of challenges
// 5. HTML Challenges
// 6. eCommerce (edited)