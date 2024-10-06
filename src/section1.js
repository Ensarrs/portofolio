import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section1() {
    return (
        <div className="row align-items-md-stretch">
            <div className="col-md-6">
                <div className="h-100 p-5 rounded-3">
                    <h2>Wellcome</h2>
                    <p>Hello I'm Ensar Maliqi.
                       Front-End Developer specializing in responsive design and user experience.</p>
                    <button className="btn btn-outline-light" type="button"><a className="nav-link" href="#about">About Me</a></button>
                </div>
            </div>
        </div> 
    );
}

export default Section1;