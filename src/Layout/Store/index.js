import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { fetchStoreProducts } from "../../Api/MW-bot";
// components
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import AdminCart from "../../components/AdminCart";
import StoreItem from "../../components/StoreItem";
import Loader from "../../components/Loader";
import MobileViewCart from "../../components/MobileViewCart";

// context
import CartState from "../../context/CartState";

// utility
import { clearCart, getOldVendor, addStore } from "../../utils/shoppingCart";

function Store() {
  const id = useRouteMatch().params["id"];
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState("");
  const [storeID, setStoreID] = useState("");
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const prod = await fetchStoreProducts(id);
      const vendor = prod[0]["sold_by"]["name"];
      const idStore = prod[0]["sold_by"]["id"];
      setStore(vendor);
      setStoreID(idStore);
      setProducts([...prod]);
      setProductCount(prod.length);
      setLoading(false);
      const oldStore = getOldVendor();
      if (oldStore !== idStore) {
        clearCart();
      }
      addStore(idStore);
    };
    getProducts();
  }, []);

  return loading ? (
    <React.Fragment>
      <NavBar />
      <Banner
        showNav={false}
        image={"https://cdn.filestackcontent.com/uSwJlPECTRq2s3vzpCFw"}
      />
      <Loader />
      <Footer />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <CartState>
        <NavBar />
        <Banner
          showNav={false}
          image={"https://cdn.filestackcontent.com/uSwJlPECTRq2s3vzpCFw"}
        />
        <section className="section-body">
          <div
            className="container margin-top"
            style={{ position: "relative" }}
          >
            {productCount > 0 ? (
              products.map((product) => {
                return (
                  <StoreItem
                    key={product.id}
                    productID={product.id}
                    name={product.name}
                    category={product.category}
                    baseCharge={parseInt(product.base_charge)}
                    available={product.available}
                    additionCharge={parseInt(product.addition_charge)}
                    inCart={false}
                  />
                );
              })
            ) : (
              <Loader empty={true} />
            )}

            <MobileViewCart key={1} />
            <AdminCart store={store} />
          </div>
        </section>
        <Footer />
      </CartState>
    </React.Fragment>
  );
}

export default Store;
