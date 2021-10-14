import React from "react";
import JobCard from "./JobCard";

function JobCardList ({ jobs }) {
    return (
        <div className="job-card-list">
            {jobs.map(job => (
                <JobCard 
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
             />
            ))}
           
        </div>
    )
};

export default JobCardList;