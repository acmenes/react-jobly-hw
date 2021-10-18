import React, { useState, useEffect } from "react";
import CompanySearch from "./CompanySearch";
import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";

function CompanyList () {
    const [companies, setCompanies] = useState([])

    useEffect(function displayCompanies(){
        listCompanies();
    }, []);
    
    if(!companies) return <LoadingSpinner />;

    async function listCompanies() {
        const companies = await JoblyApi.getCompanies();
        setCompanies(companies)
    };

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
      }
    return (
        <div className="company list">
             <SearchForm searchFor={search} />
            <p>List of companies</p>
            {/* {companies.length} */}
            {companies.map(company => (
                <CompanyCard 
                    name={company.name}
                    description={company.description}
                    logoUrl={company.logoUrl}
                    handle={company.handle}
                />
            ))} 
        </div>
    )
};

export default CompanyList;