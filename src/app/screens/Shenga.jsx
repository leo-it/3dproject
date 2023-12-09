import "./Shenga.css";

import Spline from "@splinetool/react-spline";

function Shenga() {
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
}

export default Shenga;
