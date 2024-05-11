import { motion } from "framer-motion";
import Buttons from "../Buttons/Buttons";
import "./offer.css";
const Offer = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer-content">
          <motion.div
            animate={{ x: [-400, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{
              once:true,
              amount:"all"
            }}
            className="offer-imgs"
          >
            <img src={require("../Assent/Vector (2).png")} alt="offer" />
            <img
              src={require("../Assent/Mask group.png")}
              alt="offer"
              className=" "
            />
          </motion.div>
          <motion.div
            className="offer-text"
            whileInView={{ x: [400, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{
              once:true
            }}
          >
            <h1>
              delicious <br /> coffee to go{" "}
            </h1>
            <p className="lato-regular-italic">
              For the price of one espresso, get two cappucion. <br />
              The excellent deal available till May 20
            </p>
            <Buttons color={"white"} border={"white"} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
