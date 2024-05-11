import { RoastCards } from "../Assent/Data";
import { ImArrowUpRight2 } from "react-icons/im";
import "./roast.css";
import { motion } from "framer-motion";
const Roast = () => {
  return (
    <div className="roast">
      <div className="container">
        <div className="roast-content">
          <div className="roast-text">
            <h1>Roast Coffee</h1>
            <p className="lato-regular-italic">
              Delicious handcrafted drinks and snacks made from the simplest
              highest quality ingredient whether is quality moring from the
              nearest coofee shop or a quick middy snack delicious handcraft
              drink and sanck made from the simplest highest quality indreient.
              coffee is at the heart of what we dohighest quality indreient.
            </p>
          </div>
          <div className="roast-cards">
            {RoastCards.map((el, index) => {
              return (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "backInOut" }}
                  key={index}
                  className="card"
                >
                  <h2>{el.title}</h2>
                  <p>{el.paragrah}</p>
                  <ImArrowUpRight2 />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roast;
