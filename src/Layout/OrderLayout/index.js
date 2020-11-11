import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Order from "../../components/Order";
import Footer from "../../components/Footer";
import { useRouteMatch } from "react-router-dom";
import { fetchData } from "../../Api";
import { apiPath } from "../../url";
import Loader from "../../components/Loader";
import { addResturantToLocalStorage } from "../../utils/resturant";
import { createCart } from "../../utils/shoppingCart";

const OrderLayout = () => {
  const [state, setState] = useState({
    foodItems: [],
    isLoading: true,
  });
  const param = useRouteMatch().params;

  useEffect(() => {
    const getFoodItems = async () => {
      const parameter = apiPath.resturants + "/" + param.id + "?loadItems=true";
      const resturant = await fetchData(parameter);

      setState({
        foodItems: resturant[0].items,
        isLoading: false,
      });
      createCart(param.id);
      addResturantToLocalStorage(
        resturant[0].restaurantName,
        resturant[0].id,
        resturant[0].schoolName
      );
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
        <Order foodItems={state.foodItems} />
      );
    }
  };
  return (
    <>
      <NavBar />
      <Banner
        showNav={false}
        image={"https://cdn.filestackcontent.com/uSwJlPECTRq2s3vzpCFw"}
      />
      <section className="section-body">
        <div className="container margin-top" style={{ position: "relative" }}>
          <Display />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderLayout;
