import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ name, description, logoUrl, handle }) {
    return (
        <div className="company-card">
            {name}
        </div>
    )
};

export default CompanyCard;