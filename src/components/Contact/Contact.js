import React from 'react';

const Contact = () => {

    const submitForm = (e) => {
        e.preventDefault();
        const firstName = document.querySelector('#firstName').value
            , lastName = document.querySelector('#lastName').value
            , phoneNumber = document.querySelector('#phoneNumber').value
            , guestEmail = document.querySelector('#guestEmail').value
            , guestMessage = document.querySelector('#guestMessage').value
            , bodyBeingSent = { firstName, lastName, phoneNumber, guestEmail, guestMessage };
        fetch("https://qz4rx6qar7.execute-api.us-east-1.amazonaws.com/prod/contact", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyBeingSent),
            statusCode: 200
        })
            .then(response => {
                console.log('RESPONSE STATUS', response.status)
                if (response.status === 200) {
                    formResponse(true)
                } else {
                    formResponse(false)
                }
            })
            .catch(() => formResponse(false));
    };

    const formResponse = (status) => {
        const form = document.querySelector('.contact__form');
        const message = document.querySelector('.contact__form_response');
        form.classList.toggle("fadeOut");
        message.classList.toggle("fadeIn");
        if (status) {
            message.innerHTML = "Thank you for your response."
        }
        else {
            message.innerHTML = `There was an error submitting your response. Please try again or <a href="mailto:marquis0403@gmail.com" className="contact__span-email">email</a> me!`
        }
    }



    return (
        <section id="contact">
            <h2 className="section__header__primary">Contact Me</h2>
            <div className="contact__main-content">
                <p className="contact__text_primary">Feel free to <a href="mailto:marquis0403@gmail.com" className="contact__span-email">email</a> me or fill out this form and I will get back to you as soon as possible!</p>
                <form onSubmit={submitForm} className="contact__form" required >
                    <div className="contact__form-names">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" id="firstName" className="contactInputField" placeholder="First Name" />

                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" className="contactInputField" placeholder="Last Name" />
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" className="contactInputField" placeholder="Phone" />

                    </div>

                    <label htmlFor="guestEmail">Email:</label>
                    <input type="email" name="guestEmail" id="guestEmail" className="contactInputField" placeholder="Email" />

                    <label htmlFor="guestMessage">Message:</label>
                    <textarea type="text" name="guestMessage" id="guestMessage" className="contactInputField" placeholder="Message" />
                    <input type="submit" className="contactSubmitButton" />
                </form>
            </div>
            <div>
                <h3 className="contact__form_response"></h3>
            </div>
        </section>
    )
};

export default Contact;