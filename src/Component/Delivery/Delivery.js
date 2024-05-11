import "./delivery.css";
import { DeliveryImg } from "../Assent/Data";
import { motion } from "framer-motion";
const Delivery = () => {
  return (
    <div className="delivery">
      <motion.div
        className="delivery-animte"
        initial={{ width: "90% " }}
        whileInView={{ width: "0%" }}
        viewport={{
          once:true
        }}
        transition={{ duration: 1.5, delay:0.5 , ease: "easeOut" }}
      ></motion.div>
      <div className="container">
        <div className="delivery-content">
          <div className="delivery-img">
            {DeliveryImg.map((el, i) => {
              return <img alt="delivery" key={i} src={el.img} />;
            })}
          </div>
          <div className="delivery-text">
            <h1>Coffee House at home</h1>
            <p>
              whether is quality moring from the nearest coofee shop or a quick
              middy snack
            </p>
            <div className="delivery-price">
              <span>$12.00</span>
              <button>Add to card</button>
            </div>
          </div>
        </div>
      </div>
      <img className="imgDelivery" src={require("../Assent/Vector (10).png")} alt="delivery" />
    </div>
  );
};

export default Delivery;
