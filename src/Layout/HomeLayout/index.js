import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../Api";
import { path, apiPath } from "../../url";

import Banner from "../../components/Banner";
import Resturants from "../../components/Resturants";
import styles from "./styles.module.css";
import Categroies from "../../components/Categories";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
const HomeLayout = () => {
  const [state, setState] = useState({ resturant: [], isLoading: true });

  useEffect(() => {
    const allResturants = async () => {
      const resturants = await fetchData(apiPath.resturants);
      // show first five
      const truncatedList = resturants.slice(0, 6);
      setState({ resturant: truncatedList, isLoading: false });
    };
    allResturants();
  }, []);

  const Display = () => {
    return state.isLoading ? (
      <Loader />
    ) : (
      <Resturants resturants={state.resturant} />
    );
  };

  return (
    <div>
      <section className="section-body">
        <NavBar />
        <Banner
          image={"https://cdn.filestackcontent.com/gzje3d8TMWg8kJ1y94uw"}
        />
        <div className="margin-top">
          <SearchBar searchText={"Find Your Favourite Place...."} />
        </div>

        <Categroies />
        <div className={`${styles.margin} container`}>
          <Display />
        </div>
        <div className={`${styles.pagination} container`}>
          <Link
            className="ui right labeled icon button green"
            to={path.resturantPage}
          >
            <i className="right arrow icon"></i>
            MORE RESTURANTS
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
