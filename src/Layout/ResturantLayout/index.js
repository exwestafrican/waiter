import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import Resturants from "../../components/Resturants";
import Categroies from "../../components/Categories";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";
import SearchBar from "../../components/SearchBar";
import Loader from "../../components/Loader";
import { useRouteMatch } from "react-router-dom";
import { fetchData } from "../../Api";
import { apiPath } from "../../url";
import Banner from "../../components/Banner";

const ResturantLayout = () => {
  const param = useRouteMatch().params;
  const [state, setState] = useState({ resturant: [], isLoading: true });

  useEffect(() => {
    const fetchResturantCategory = async () => {
      setState({ isLoading: true });

      // if user doesn't specifiy a resturant, fetch all
      const parameters = param.id
        ? apiPath.resturants + "?schoolId=" + param.id
        : apiPath.resturants;

      const resturants = await fetchData(parameters);

      setState({ resturant: resturants, isLoading: false });
    };
    fetchResturantCategory();
  }, [param.id]);

  const Display = () => {
    return state.isLoading ? (
      <Loader />
    ) : (
      <Resturants resturants={state.resturant} />
    );
  };

  return (
    <>
      <Navbar />
      <Banner
        image={"https://cdn.filestackcontent.com/gzje3d8TMWg8kJ1y94uw"}
        showNav={false}
      />
      <section className="section-body margin-top">
        <SearchBar searchText={"Find Your Favourite Place...."} />
        <Categroies currentSchool={param.name} />
        <div className={`${styles.margin} container`}>
          <Display />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResturantLayout;
