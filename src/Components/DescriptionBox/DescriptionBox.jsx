import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          I recently purchased the black hoodie from this store, and I am
          thrilled with my choice! The quality is outstanding – the fabric is
          soft, and the fit is just perfect. It's become my go-to for casual
          outings, providing both style and comfort. Definitely a must-have in
          any wardrobe!
        </p>
        <p>
          I am genuinely impressed with the black hoodie I ordered. The material
          is top-notch, providing a cozy feel without compromising on style. The
          attention to detail in design is evident, making it a versatile piece
          for any occasion. A fantastic addition to my collection – highly
          recommend!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
