import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import iphoneImg from '../images/iphones.png'

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="side1">
          <h3>GET THE NEW IPHONE 12 PRO</h3>
          <p>
            A transformation triple-camera system that adds tons of capability
            without complexity
          </p>
          <div className="buttons">
            <a href="#" className="btn1">
              Buy Now <ShoppingBasketIcon />
            </a>
            <a href="#" className="btn2">
              With $599 with trade-in
            </a>
          </div>
        </div>
        <div className="side2">
          <img src={iphoneImg} alt="Iphone Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
