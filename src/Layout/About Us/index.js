import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import style from "./styles.module.css";
import BlockButton from "../../components/BlockButton";
import { seeAllResturants } from "../../utils/general";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const history = useHistory();
  const steps = [
    {
      header: "Select A Resturant",
      description: "Browse restaurants that deliver near you",
    },
    {
      header: "Select Food Items",
      description: "Add all items you'll like to purchase to your cart",
    },
    {
      header: "Receive it at your doorstep",
      description:
        "You should get your order in 30 minutes but some resturants take longer (please check resturant page for more info)",
    },
  ];

  const StepComponent = ({ index, header, description }) => {
    return (
      <div className="margin-top">
        <p className={style["make-bold"]}>
          {index} - {header}
        </p>
        <p className={style["step-description"]}> {description}</p>
      </div>
    );
  };
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <section className="section-body container margin-top">
        <header className={style["title"]}>ABOUT WAITER</header>
        <section className={style["content"]}>
          <p>
            Mobile Waiter is the most convenient online food ordering site for
            students, connecting them with the best restaurants around.
          </p>
          <p>
            We Understand that being away from home can be quite daunting and
            finding the best places around town, close to impossible. So lets
            locate the best resturants for you.
          </p>
          <p>Here's how to use waiter in 3 easy steps:</p>
          <div>
            {steps.map((step, index) => (
              <StepComponent
                key={index}
                index={index + 1}
                header={step.header}
                description={step.description}
              />
            ))}
          </div>

          <section className={style["content"]}>
            <small>
              For more information, complaints or ideas on how we can imporove,
              please reach us on
              <a
                target="_blank"
                href={"https://twitter.com/MobileWaiterNg"}
                className={style["space-between-links"]}
              >
                TWITTER
              </a>
              or
              <a
                target="_blank"
                href={"https://www.instagram.com/mobilewaiterng/"}
                className={style["space-between-links"]}
              >
                INSTAGRAM
              </a>
            </small>
          </section>

          <div className={style["spacing"]}>
            <BlockButton
              name={"ORDER NOW"}
              callBack={() => seeAllResturants(history)}
            />
          </div>
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
