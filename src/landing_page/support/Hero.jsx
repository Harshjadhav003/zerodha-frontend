import React from 'react';

function Hero() {
    return (
        <div className="hero-section container py-5">
            
            {/* Top Row */}
            <div className="d-flex justify-content-between align-items-center mb-4 color-gray">
                <h1 className="m-0">Support Portal</h1>
                <button className="btn btn-primary">My Tickets</button>
            </div>

            {/* Search Bar */}
            <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Eg: How do I open my account, How do I activate F&O..."
                />
            </div>

        </div>
    );
}

export default Hero;