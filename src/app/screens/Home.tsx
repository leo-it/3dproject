import "./Shenga.css";

import React from 'react'
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
    <Spline scene="https://prod.spline.design/JfZF-njCxNZq3TXo/scene.splinecode" />
    <button
      onClick={() => window.location.reload()}
      className="button--shenga button"
    >
      Volver a empezar
    </button>
  </>
  );
};

export default Home;
