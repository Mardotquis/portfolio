import React from 'react';

const Contact = () => {

    const submitForm = (e) => {
        e.preventDefault();
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const phoneNumber = document.querySelector('#phoneNumber').value;
        const guestEmail = document.querySelector('#guestEmail').value;
        const guestMessage = document.querySelector('#guestMessage').value;
        const bodyBeingSent = { firstName, lastName, phoneNumber, guestEmail, guestMessage }
        console.log(bodyBeingSent);

        fetch("https://marquis-portfolio.herokuapp.com/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyBeingSent)
        })
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(response => console.log(response))
            .catch(e => console.log(e))

    };
    return (
        <section id="contact">
            <h1 className="section__header__primary">Contact</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="firstName"></label>
                <input type="text" name="firstName" id="firstName" />

                <label htmlFor="lastName"></label>
                <input type="text" name="lastName" id="lastName" />

                <label htmlFor="phoneNumber"></label>
                <input type="text" name="phoneNumber" id="phoneNumber" />

                <label htmlFor="guestEmail"></label>
                <input type="text" name="guestEmail" id="guestEmail" />

                <label htmlFor="guestMessage"></label>
                <input type="text" name="guestMessage" id="guestMessage" />
                <input type="submit" />
            </form>
        </section>
    )
};

export default Contact;