import React, { useState, useEffect } from "react";
import axios from "axios";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selected, setSelected] = useState(-1); 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      //console.log(companies);
      setCompanies(result.data);
    };
    fetchData();
  }, []);
  
  return (
    <div>
      {companies.map((company,index) => (
        <div key={company.id}>
          <h3>{company.name}</h3>
          <p>{company.description}</p>
          <button onClick={() =>{setShowDetails(!showDetails)
          showDetails ? setSelected(-1):
          setSelected(index)
          } }>

           {index===selected ? "Hide Details" : "View Details" }
          </button>
          {showDetails && index===selected &&(
            <div>
              <p>
                <strong>Location:</strong> {company.location}
              </p>
              <p>
                <strong>Website:</strong> {company.website}
              </p>
              <p>
                <strong>Employees:</strong> {company.employees}
              </p>
            </div>
          )}
          </div>
      ))}
    </div>
  );
};

export default Company;