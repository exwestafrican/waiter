import React, { useState, useEffect } from "react";
import Options from "./main";
import { fetchData } from "../../Api";
import { apiPath } from "../../url";

const Categroies = ({ currentSchool = "All Schools" }) => {
  const [appear, setAppear] = useState(false);
  const [state, setState] = useState({
    isLoading: true,
    schools: [],
  });

  useEffect(() => {
    const getAllSchools = async () => {
      const schools = await fetchData(apiPath.schools);
      setState({ isLoading: false, schools: schools });
    };
    getAllSchools();
  }, []);

  const style = {
    margin: "1rem 0",
    dropdown: {
      display: appear ? "block" : "none",
    },
  };

  const HandleOnClick = () => {
    setAppear(!appear);
  };

  return (
    <div className="ui container " style={style}>
      <div className="ui floating dropdown" onClick={HandleOnClick}>
        {state.isLoading ? "Loading Schools" : currentSchool}
        <i className="dropdown icon"></i>
        <div className="menu" style={style.dropdown}>
          {state.schools.map((school) => (
            <Options name={school.name} key={school.id} id={school.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categroies;
