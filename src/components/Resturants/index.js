import React from "react";
import Resturant from "./main";
import { isOpen } from "../../utils/resturant";

const Resturants = ({ resturants = [] }) => {
  // console.log(resturants);

  return resturants.map((resturant) => (
    <Resturant
      key={resturant.id}
      id={resturant.id}
      university={resturant.schoolName}
      image={"https://cdn.filestackcontent.com/MgaLQsTTU2n9wN0MtYnQ"}
      resturantName={resturant.restaurantName}
      deliveryTime={30}
      // status={resturant.open}
      status={isOpen()}
    />
  ));
};

export default Resturants;
