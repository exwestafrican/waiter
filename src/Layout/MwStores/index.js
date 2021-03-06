import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import MwStoreCard from "../../components/MwStoreCard";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import styles from "./styles.module.css";
import { fetchStores } from "../../Api/MW-bot";

function MwStores() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const getStores = async () => {
      const storeFronts = await fetchStores();
      setStores(storeFronts);
    };
    getStores();
  }, []);
  
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <section className="section-body margin-top">
        <div className={`${styles.margin} container`}>
          <SearchBar searchText={"Find Your Favourite Place...."} />
          {stores.map((store) => (
            <MwStoreCard
              key={store.id}
              image={"https://cdn.filestackcontent.com/gzje3d8TMWg8kJ1y94uw"}
              productName={store.name}
              deliveryTime={"30"}
              address={store.address}
              storeID={store.id}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default MwStores;
