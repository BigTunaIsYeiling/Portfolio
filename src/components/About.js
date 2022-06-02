import "../scss/about.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function About() {
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
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className="About"
    >
      <section className="f-flex flex-column align-items-start justify-content-center">
        <div className="container">
          <h6 className="tag">About Me--</h6>
          <div className="about-me d-flex flex-column align-items-start justify-content-center text-start w-75 ">
            <p>
              <img src={require("../assets/hello.png")} alt="hi" /> Hi There!
              I'm Ahmed Anany and I'm a self-taught developer. I have a passion
              for creating and learning new things. I'm currently Front-End Web
              Developer Working as <a>FreeLancer </a>
              and I'm looking for a new opportunity to grow my skills ,
              knowledge and experience
            </p>
            <p className="mt-4 text-start">
              I'm also studying at Tanta University as student of Data Sceience
              at Faculty of Sciences at my third year
            </p>
            <p className="mt-3 text-start">
              I've experienced in working with HTML, SCSS, JavaScript with it's
              libraries, React,Vue and Adobe illustrator
            </p>
            <a href={require("../assets/aa.pdf")} download>
              <button className="my-3 res">resume</button>
            </a>
            <div className="date d-flex align-items-center flex-column">
              <h6 className="hours">{date.getHours() % 12}</h6>
              <h6>:</h6>
              <h6 className="mint">{date.getMinutes()}</h6>
              <h6>:</h6>
              <h6 className="seconds">{date.getSeconds()}</h6>
              <h6 className="tau mt-1">{greet}</h6>
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
    </motion.div>
  );
}
