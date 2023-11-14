import Lottie from "lottie-web";
import React from "react";

const CryptoWalletAnimation = () => {
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    const lottieInstance = Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      speed: 0.3,
      easing: "easeInOutQuad",
      path: "https://lottie.host/b1a4bb6a-aff9-4a01-9c72-44353ac8885d/thc3uwtxKB.json",
    });

    return () => {
      lottieInstance.destroy();
    };
  }, []);

  return (
    <div
      ref={lottieRef}
      style={{ width: "300px", height: "300px", background: "#FFFFFF" }}
    />
  );
};

export default CryptoWalletAnimation;
