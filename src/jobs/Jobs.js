import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";

function Jobs () {
    
    const [jobs, setJobs] = useState([]);

    useEffect(function getJobs(){
        listJobs();
    }, []);

    async function listJobs(title) {
        let jobs = await JoblyApi.getJobs(title)
        console.log(jobs)
        for(const property in jobs[0]) {
            console.log(`${property}`)
        }
        setJobs(jobs)
    };

    // listJobs();
    
    return(
        <div>
            {/* {jobs.length} */}
            <JobCardList jobs={jobs} />
        </div>
    )
};

export default Jobs;