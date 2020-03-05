import React from "react";
import {INTEREST_FORM_LINK} from "../constants";

const HomePage = () =>
    <div className="container">
        <h1 className="pt-3">Welcome to Programming Metal!</h1>
        <p>
            Do you feel overwhelmed by traditional big-tech computer science interviews?
            Do you wish that you could practice in a low-stress environment where you can receive
            honest feedback about your interview skills? Well, boy oh boy have you come to the right
            place!
        </p>
        <br/>
        <h2>Interested?</h2>
        <p>
            To schedule an interview, start by filling out the interest form below.
        </p>
        <button type="button" className="btn btn-secondary"
                onClick={() => window.open(INTEREST_FORM_LINK)}>
            I'd like to learn more
        </button>

        <h2 className="pt-4">Book Now</h2>
        <p>
            If you are ready to schedule an appointment, click the link below.
        </p>
        <button type="button" className="btn btn-secondary" disabled>
            Make an Appointment (coming soon)
        </button>
        <h2 className="pt-4">About Us</h2>
        <p>
            Who are we? We are a group of computer scientists and engineers who have extensive experience
            with big tech interviews. And we are pretty rad.
        </p>
    </div>

export default HomePage;