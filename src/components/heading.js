import React from 'react';

const Heading = (props) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div class="col-12 text-center">
                    <h2 class="section-heading">
                        <i className={"fa " + props.fa}></i>
                        <p className="text-center mt-2">
                            {props.title}
                        </p>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Heading;