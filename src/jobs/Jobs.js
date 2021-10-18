import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import SearchForm from "../common/SearchForm";

import LoadingSpinner from "../common/LoadingSpinner";

function Jobs () {
    
    const [jobs, setJobs] = useState([]);

    useEffect(function getJobs(){
        listJobs();
    }, []);

    if(!jobs) return <LoadingSpinner />;

    async function listJobs(title) {
        let jobs = await JoblyApi.getJobs(title)
        console.log(jobs)
        for(const property in jobs[0]) {
            console.log(`${property}`)
        }
        setJobs(jobs)
    };

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
      }

    // listJobs();
    
    return(
        <div>
            <SearchForm searchFor={search} />
            {/* {jobs.length} */}
            <JobCardList jobs={jobs} />
        </div>
    )
};

export default Jobs;