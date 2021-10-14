import React from "react";
import "./CompanySearch.css"

function CompanySearch () {
    return (
        <div className="company-search">
            <form className="company-search-bar" action="/" method="get"> 
                <label htmlFor="header-search">
                </label>
                <input 
                    type="text" 
                    id="header-search" 
                    placeholder="Search companies on Jobly"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default CompanySearch;