import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import header from "../../img/header.png";
import FoodItem from "../../components/FoodItem";
import Footer from "../../components/Footer";
import { useRouteMatch } from "react-router-dom";
import { fetchData } from "../../Api";
import { apiPath } from "../../url";
import Loader from "../../components/Loader";

const OrderLayout = () => {
  const [state, setState] = useState({
    foodItems: [],
    isLoading: true,
    resturanName: null,
    resturantId: null,
    schoolName: null,
  });
  const param = useRouteMatch().params;

  useEffect(() => {
    const getFoodItems = async () => {
      const parameter = apiPath.resturants + "/" + param.id + "?loadItems=true";
      const resturant = await fetchData(parameter);

      setState({
        foodItems: resturant[0].items,
        isLoading: false,
        resturanName: resturant[0].restaurantName,
        resturantId: resturant[0].id,
        schoolName: resturant[0].schoolName,
      });
    };
    getFoodItems();
  }, [param.id]);

  const Display = () => {
    // if page finishes loading and no item is found run if
    if (!state.isLoading && state.foodItems.length === 0) {
      return <Loader empty={true} />;
    } else {
      return state.isLoading ? (
        <Loader />
      ) : (
        <FoodItem
          resturantMenu={state.foodItems}
          resturantName={state.resturanName}
          resturantId={state.resturantId}
          schoolName={state.schoolName}
        />
      );
    }
  };
  return (
    <>
      <NavBar />
      <Banner showNav={false} image={header} />
      <section className="section-body">
        <div className="container margin-top">
          <Display />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderLayout;
