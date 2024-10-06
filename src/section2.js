import React from 'react';

function Section2() {
    return (
        <div className=" text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">About Me</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">
                    I am Ensar Maliqi, recognized as one of the best young programmers today. With innovative skills and deep knowledge in advanced technologies, my projects have gained attention and admiration in the industry. My passion and dedication to programming set me apart in the tech field.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"><a className="nav-link" href="#contact">Contact Me</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;

