import React from 'react';

function Team() {
    return (
        <div className="team-section container py-5">

            <h1 className="text-center mb-5">People</h1>

            {/* Founder Section */}
            <div className="row align-items-center justify-content-center gx-5 mb-5">

                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                        src="/media/images/Harsh1.jpeg"
                        className="img-fluid rounded-circle team-img"
                        style={{ width: '216px', height: '216px' }}
                        alt="Harshvardhan Jadhav"
                    />
                    <h5 className="mt-3 fw-bold">Harshvardhan Jadhav</h5>
                    <p className="text-muted">Founder, CEO</p>
                </div>

                <div className="col-md-7">
                    <p>
                        Harsh bootstrapped and founded the company in 2026 to overcome
                        the hurdles he faced during his decade-long stint as a trader.
                        Today, the platform has changed the landscape of the Indian
                        broking industry.
                    </p>

                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                        and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p>Playing basketball is his zen.</p>

                    <p>
                        <strong>Connect on:</strong>  <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
                    </p>
                </div>
            </div>

            {/* Team Row 1 */}
            <div className="row text-center g-4 mb-4">
                <div className="col-md-4 col-sm-6">
                    <img src="/media/images/Nikhil.jpg"
                        className="img-fluid rounded-circle team-img"
                        style={{ width: '216px', height: '216px' }}
                        alt="Nikhil Kamath" />
                    <h5 className="mt-3 fw-bold">Nikhil Kamath</h5>
                    <p className="text-muted">Co-founder & CFO</p>
                </div>

                <div className="col-md-4 col-sm-6">
                    <img src="/media/images/Kailash.jpg"
                        className="img-fluid rounded-circle team-img"
                        style={{ width: '216px', height: '216px' }}
                        alt="Dr. Kailash Nadh" />
                    <h5 className="mt-3 fw-bold">Dr. Kailash Nadh</h5>
                    <p className="text-muted">CTO</p>
                </div>

                <div className="col-md-4 col-sm-6">
                    <img src="/media/images/Venu.jpg"
                        className="img-fluid rounded-circle team-img"
                        style={{ width: '216px', height: '216px' }}
                        alt="Venu Madhav" />
                    <h5 className="mt-3 fw-bold">Venu Madhav</h5>
                    <p className="text-muted">COO</p>
                </div>
            </div>

            {/* Team Row 2 */}
            <div className="row text-center g-4">
                <div className="col-md-4 col-sm-6">
                    <img src="/media/images/Hanan.jpg"
                        className="img-fluid rounded-circle team-img"
                        style={{ width: '216px', height: '216px' }}
                        alt="Hanan Delvi" />
                    <h5 className="mt-3 fw-bold">Hanan Delvi</h5>
                    <p className="text-muted">CCO</p>
                </div>

                <div className="col-md-4 col-sm-6">
                    <img src="/media/images/Seema.jpg"
                        className="img-fluid rounded-circle team-img"
                        style={{ width: '216px', height: '216px' }}
                        alt="Seema Patil" />
                    <h5 className="mt-3 fw-bold">Seema Patil</h5>
                    <p className="text-muted">Director</p>
                </div>

                <div className="col-md-4 col-sm-6">
                    <img src="/media/images/Austin.jpg"
                        className="img-fluid rounded-circle team-img"
                        style={{ width: '216px', height: '216px' }}
                        alt="Austin Prakesh" />
                    <h5 className="mt-3 fw-bold">Austin Prakesh</h5>
                    <p className="text-muted">Director Strategy</p>
                </div>
            </div>

        </div>
    );
}

export default Team;