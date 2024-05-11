import { ImArrowUpRight2 } from "react-icons/im";
import "./hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="hero">
          <motion.div
            transition={{ duration: 1, ease: "easeOut" }}
            animate={{ x: [-300, 0], opacity: [0, 1] }}
            className="text"
          >
            <div className="icons">
              <div className="icon-img">
                <img src={require("../Assent/instgram.png")} alt="icon" />
              </div>
              <div className="icon-img">
                <img src={require("../Assent/facebook.png")} alt="facebook" />
              </div>
            </div>

            <h1>
              <span>Coffee Houses</span> In your way
            </h1>
            <p className="lato-regular-italic">
              Delicious handcrafted drinks and snacks made from the simplest
              highest quality ingredient
            </p>
            <button>Our new taste</button>
          </motion.div>
          <div
            className="hero-imgs"
          >
            <div className="hero-img">
              <img src={require("../Assent/hero 2.png")} alt="hero" />
            </div>

            <div className="svg-img">
              <img src={require("../Assent/cricls.png")} alt="heroImg" />
              <ImArrowUpRight2 />
            </div>

            <p className="lato-regular-italic">
              Whether it's a quick moring coffee from the nearest coffee shop or
              a quick middy snack, we have something for everyone
            </p>
          </div>
          <motion.div
            animate={{ x: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="img-hero"
          >
            <img src={require("../Assent/hero.png")} alt="hero-img" />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
