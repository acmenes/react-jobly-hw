import React, { useState, useContext } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import UserContext from "../auth/UserContext";
import "./JobCard.css"

function JobCard ({ id, title, salary, equity, companyName }) {
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    React.useEffect(function updateAppliedStatus(){
        console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]); 

    async function handleApply(evt) {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
      }
    
    return (
        <div className="job-card">
            <Card>
                <CardBody>
                    <CardTitle tag="h4">{title}</CardTitle>
                    <CardSubtitle tag="h5">{companyName}</CardSubtitle>
                    <CardText>Job ID: {id}</CardText>
                    <CardText>Salary: {salary}</CardText>
                    <CardText>Equity: {equity}</CardText>
                    <button className="button" onClick={handleApply} disabled={applied}>Apply to Job Number {id}</button>
                </CardBody>
            </Card>
        </div>
    )
};

export default JobCard;
