import React from "react";

function JobCard ({ id, title, salary, equity, companyName }) {
    return (
        <div className="job-card">
            <h2>{title}</h2>
        </div>
    )
};

export default JobCard;
