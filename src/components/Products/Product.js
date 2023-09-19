/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./Product.scss";
import sn1 from "../../assets/images/sn1.jpg";
import sn2 from "../../assets/images/sn2.jpg";
import sn3 from "../../assets/images/sn3.jpg";
import sn4 from "../../assets/images/sn4.jpg";
import Lightbox from "react-image-lightbox";

// eslint-disable-next-line jsx-a11y/alt-text
// eslint-disable-next-line react/jsx-no-comment-textnodes,

function Product() {
  const [currentImg, setCurrentImg] = useState(sn1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentText, setCurrentText] = useState("text1");

  const handleClickPreviewImg = () => {
    setIsOpen(true);
    let index = images.findIndex((item) => item === currentImg);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const images = [sn1, sn2, sn3, sn4];

  return (
    <div className="product-container">
      <div className="container-left">
        <div className="img-up">
          <img src={currentImg} onClick={() => handleClickPreviewImg} />
          <div className="img-down">
            <div className="img-small">
              <img
                src={sn1}
                onClick={() => setCurrentImg(sn1)}
                className={currentImg === sn1 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sn2}
                onClick={() => setCurrentImg(sn2)}
                className={currentImg === sn2 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sn3}
                onClick={() => setCurrentImg(sn3)}
                className={currentImg === sn3 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sn4}
                onClick={() => setCurrentImg(sn4)}
                className={currentImg === sn4 ? "active" : ""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-right">
        <div className="title">
          Giày chạy bộ nam New Balance Cushioning - M880B12
        </div>
        <div className="price">1.648.000₫</div>
        <div className="size">Size : 40</div>
        <div className="action">
          <label className="quantity">So luong</label>
          <input type="number" />
          <button className="buy">Chon mua</button>
        </div>
        <div>
          <text>{currentText}</text> <br></br>
          <button onClick={() => setCurrentText("text2")}>Change Texts</button>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            // onMovePrevRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndex + images.length - 1) % images.length,
            //   })
            // }
            // onMoveNextRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndex + 1) % images.length,
            //   })
            // }
          />
        )}
      </div>
    </div>
  );
}

export default Product;
