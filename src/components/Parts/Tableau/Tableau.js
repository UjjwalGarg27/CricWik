import React from 'react';
import TableauReport from 'tableau-react';
import "./style.css";
import Navbar from "../Navbar/Navbar";

const Tableau = () => {
    return (
        <>
        <Navbar />

        <div className="tableau">
        <h1> Data 1 </h1>
            <TableauReport url="https://public.tableau.com/views/GenderbifurcationwrtDepartment/GenderbifurcationwrtDepartment" />
        </div>

        <div className="tableau">
        <h1> Data 2 </h1>
            <TableauReport url="https://public.tableau.com/views/MonthlySalarybasedonMaritalStatuswrtEducationLevel/MonthlySalarybasedonMaritalStatuswrtEducationLevel" />
        </div>
        </>
    )
}

export default Tableau;
