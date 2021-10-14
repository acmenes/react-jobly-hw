import React from "react";
import CompanySearch from "./CompanySearch";
import CompanyCard from "./CompanyCard";

function CompanyList () {
    return (
        <div className="company list">
            <p>List of companies</p>
            <CompanySearch />
            <CompanyCard />
        </div>
    )
};

export default CompanyList;