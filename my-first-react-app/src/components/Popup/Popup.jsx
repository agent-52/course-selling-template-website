import { useEffect, useState } from "react";
import "./Popup.css"

export default function PhonePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupShown = localStorage.getItem("popupShown");
    if (hasPopupShown) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrollPosition >= 2 * viewportHeight) {
        setShowPopup(true);
        localStorage.setItem("popupShown", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="flexC alignC justifyC gap0 popup">
      <div className="flexC alignC justifyC bgW gap0 relative popupContent">
        
        <h2 className="f1 fs2 cBl textC">Book a Demo class</h2>
        <input
          type="tel"
          placeholder="Phone number"
          className="popupInput"
        />
        <button onClick={() => setShowPopup(false)} className="fs1 f2 bgBl cW pdi1 pdb0 brR">Book Now!</button>
        
      </div>
      <div className="w100 flex justifyE"><div className="cross f2 fs1_5 cW bgLb" onClick={() => setShowPopup(false)}>X</div></div>
    </div>
  );
}
