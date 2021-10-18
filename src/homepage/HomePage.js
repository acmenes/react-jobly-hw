import React from "react";

import "../App.css"

const workImg = require("../img/work.jpg")

function HomePage() {
    return(
        <div class="jobly-container">
            <h2>Welcome to Jobly</h2>
            <img src={workImg.default} />
            {/* <button>Log In</button>
            <button>Sign Up</button> */}
        </div>
    );
};

export default HomePage;