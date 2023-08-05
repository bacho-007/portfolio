import React, { useEffect } from 'react'; // Import useEffect
import './contactform.css';

function ContactForm() {
    useEffect(() => { // Use useEffect to handle the input focus/blur events
        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value === "") { // Use strict equality check
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);

            // Clean up event listeners when component unmounts
            return () => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            };
        });
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="contact__container"> {/* Use className instead of class */}
            <div className="contact-form"> {/* Use className instead of class */}
                <form action="index.html" autoComplete="off"> {/* Use autoComplete instead of autocomplete */}
                    <h3 className="contact__input__title">Contact us</h3>
                    <div className="input-container">
                        <input type="text" name="name" className="input" /> {/* Use className instead of class */}
                        <label htmlFor="">Username</label> {/* Use htmlFor instead of for */}
                        <span>Username</span>
                    </div>
                    <div className="input-container">
                        <input type="email" name="email" className="input" /> {/* Use className instead of class */}
                        <label htmlFor="">Email</label> {/* Use htmlFor instead of for */}
                        <span>Email</span>
                    </div>
                    <div className="input-container">
                        <input type="tel" name="phone" className="input" /> {/* Use className instead of class */}
                        <label htmlFor="">Phone</label> {/* Use htmlFor instead of for */}
                        <span>Phone</span>
                    </div>
                    <div className="input-container textarea">
                        <textarea name="message" className="input"></textarea> {/* Use className instead of class */}
                        <label htmlFor="">Message</label> {/* Use htmlFor instead of for */}
                        <span>Message</span>
                    </div>
                    <input type="submit" value="Send" className="btn" /> {/* Use className instead of class */}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
