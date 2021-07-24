import React from 'react';
import TableauReport from 'tableau-react';
import "./style.css";

const Tableau = () => {
    return (
        <>
        <div className="tableau">
        <h1> Data 1 </h1>
            <TableauReport url="https://public.tableau.com/views/GenderbifurcationwrtDepartment/GenderbifurcationwrtDepartment" />
        </div>

        <div>
        <h1> Data 2 </h1>
            <TableauReport url="https://public.tableau.com/views/MonthlySalarybasedonMaritalStatuswrtEducationLevel/MonthlySalarybasedonMaritalStatuswrtEducationLevel" />
        </div>
        </>
    )
}

export default Tableau;
