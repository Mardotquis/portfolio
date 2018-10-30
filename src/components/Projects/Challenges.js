import React, { Component } from "react";

class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    toggleModal = () =>{
        const modal = this.refs.cardModal
        const card = this.refs.cardBackground;
        const overlay = this.refs.modalOverlay;

        if(modal.style.display === "none" || modal.style.display === ""){
            card.style.display = "block"
            modal.classList.toggle('fadeInto')
            card.classList.toggle('fadeInto')
            overlay.classList.toggle('modalOverlayOpen')
            card.style.backgroundImage = `url("${this.props.projectImgPath}")`;
        }else{
            modal.classList.toggle('fadeOut')
            card.classList.toggle('fadeOut')
            overlay.classList.toggle('fadeOut')
        }
    }
    render() {
        const { projectName, projectDescription, projectImgPath } = this.props;
        const grabPath = { backgroundImage: `url("${projectImgPath}")` };

        return (

            <div className="challenges__card">
                <div className="challenges__card-modal-overlay" ref="modalOverlay" onClick={this.toggleModal}></div>
                <div className="challenges__card-background" style={grabPath} onClick={this.toggleModal}></div>
                <div className="challenges__card-modal" ref="cardModal">
                    <div className="challenges__card-modal-background" ref="cardBackground"></div>
                </div>
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