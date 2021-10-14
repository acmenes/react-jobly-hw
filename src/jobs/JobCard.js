import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import "./JobCard.css"

function JobCard ({ id, title, salary, equity, companyName }) {
    return (
        <div className="job-card">
            <Card>
                <CardBody>
                    <CardTitle tag="h4">{title}</CardTitle>
                    <CardSubtitle tag="h5">{companyName}</CardSubtitle>
                    <CardText>Job ID: {id}</CardText>
                    <CardText>Salary: {salary}</CardText>
                    <CardText>Equity: {equity}</CardText>
                    <Button className="button">Apply</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default JobCard;
