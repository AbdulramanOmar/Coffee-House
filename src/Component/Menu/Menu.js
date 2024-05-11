import "./Menu.css";
import Buttons from "../Buttons/Buttons";
import { motion } from "framer-motion";
const Menu = (props, i) => {
  const product = props.product;
  return (
    <div className="menu" key={i}>
      <div className="container">
        <div className="menu-content">
          <div className="menu-header">
            <div className="menu-text">
              <h1>coffee house</h1>
              <p className="lato-regular-italic">
                whether is quality moring from the nearest coofee shop or a
                quick middy snack, we have something <br /> for everyone, Hereon
                quality moring from the nearest
              </p>
            </div>
            <Buttons color="black" border="black" />
          </div>
          <div className="menu-cards">
            {product.map((el, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  key={i}
                  className="menu-card"
                >
                  <div className="img">
                    <img src={el.img} alt="menu" />
                  </div>
                  <div className="menu-name">
                    <h2>{el.title}</h2>
                    <h4>${el.price}.00</h4>
                  </div>
                  <div className="menu-des">
                    <h2>{el.name}</h2>
                    <p>{el.ML} ml</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
