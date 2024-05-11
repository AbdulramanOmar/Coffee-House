
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  const text =
    "    delicious handcraft drink and sanck made from the simplest highest quality indreient. coffee is at the heart of what we dohighest quality indreient. coffee is at the heart of what we do ";
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <h1>coffee house</h1>
          <motion.h4 variants={container} initial="hidden" animate="show">
            {text.split("").map((el, i) => {
              return(<motion.span variants={item} key={i}>
                {el}
              </motion.span>)
              
            })}
          </motion.h4>
          <p className="lato-light-italic">
            whether is quality moring from the nearest coofee shop or a quick
            middy snack, we have something for everyone, Hereone <br />
            some option to help you caleatre the little joys of each day with us
          </p>

          <button>Our new taste</button>
        </div>
      </div>
    </div>
  );
};

export default About;
