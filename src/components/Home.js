import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/home.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Home() {
  const [date, setDate] = useState(new Date());
  useEffect(
    function () {
      setDate(new Date());
    },
    [date]
  );
  let greet = "";
  if (date.getHours() < 12 && date.getHours() >= 0) {
    greet = "AM";
  } else {
    greet = "PM";
  }
  return (
    <motion.div
      initial={{ scale: 1.2 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
      }}
      className="home d-flex align-items-center justify-content-center flex-column"
    >
      <div className="container">
        <div className="head d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-center">
            <img src={require("../assets/hello.png")} alt="hi" /> Hey! It's
            Ahmed{" "}
            <span className="one">
              <FontAwesomeIcon icon="fa-brands fa-react" />
            </span>{" "}
            &
            <span className="two">
              {" "}
              <FontAwesomeIcon icon="fa-brands fa-vuejs" />
            </span>{" "}
            Frontend developer
          </h1>
          <p className="text-center">
            This layout is designed by ReactJS,Redux, React router & SASS{" "}
          </p>
          <div className="date d-flex align-items-center flex-column">
            <p className="hours">{date.getHours() % 12}</p>
            <p>:</p>
            <p className="mint">{date.getMinutes()}</p>
            <p>:</p>
            <p className="seconds">{date.getSeconds()}</p>
            <p className="tau mt-1">{greet}</p>
          </div>
        </div>
        <section>
          <div className="projects d-flex align-items-center justify-content-center flex-column">
            <div className="project d-flex align-items-center justify-content-md-between justify-content-center flex-md-row flex-column">
              <img
                src={require("../assets/darklo.png")}
                alt="relig"
                className="img-fluid"
              />
              <div className="project-info d-flex align-items-center justify-content-center flex-column">
                <h3 className="d-md-block d-none">Relig</h3>
                <p className="d-md-block d-none">Shopping Store</p>
                <a
                  href="https://bigtunaisyeiling.github.io/Relig-store"
                  target="_blank"
                >
                  <button>Take a look</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="text-center align-items-center justify-content-center d-flex flex-column">
          <ul className="mb-3">
            <li>
              <a
                href="https://www.linkedin.com/in/ahmed-anany-0b728b234/"
                target="_blank"
              >
                <img
                  src={require("../assets/media/linkedin.png")}
                  alt="linkedIn"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/BigTunaIsYeiling" target="_blank">
                <img src={require("../assets/media/github.png")} alt="github" />
              </a>
            </li>
          </ul>
          <h5>© 2022 All rights reserved by Ahmed Anany</h5>
        </footer>
      </div>
    </motion.div>
  );
}
