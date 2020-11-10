import React from "react";
import Resturant from "./main";
import resturantImage from "../../img/resturant.jpeg";
import { isOpen } from "../../utils/resturant";

const Resturants = ({ resturants = [] }) => {
  // console.log(resturants);

  return resturants.map((resturant) => (
    <Resturant
      key={resturant.id}
      id={resturant.id}
      university={resturant.schoolName}
      image={resturantImage}
      resturantName={resturant.restaurantName}
      deliveryTime={30}
      // status={resturant.open}
      status={isOpen()}
    />
  ));
};

export default Resturants;
