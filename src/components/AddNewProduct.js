import React, { useState } from "react";

function AddNewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const handleClick = () => {
    let obj = { name, price, size, color };
    console.log(obj, JSON.stringify(obj));
    setName("");
    setPrice("");
    setSize("");
    setColor("");

    //localStorage.setItem("product", JSON.stringify(obj));
    let productList = localStorage.getItem("productList");
    if (productList) {
      let arr = JSON.parse(productList);
      arr.push(obj);
      localStorage.setItem("product", JSON.stringify(arr));
    } else {
      localStorage.setItem("product", JSON.stringify(obj));
    }

    console.log(JSON.parse(obj));
  };

  const [isShow, setIsShow] = useState(true);

  const handleHideShow = () => {
    setIsShow(!isShow);
  };

  localStorage.setItem("name", "khanh");

  return (
    <div>
      {isShow === true && (
        <fieldset>
          <legend>Add a New Product</legend>
          <div className="input-product">
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div className="input-product">
            <label>Price: </label>
            <input
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            ></input>
          </div>
          <div className="input-product">
            <label>Size: </label>
            <input
              type="text"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            ></input>
          </div>
          <div className="input-product">
            <label>Color: </label>
            <input
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            ></input>
          </div>
          <div>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Add New
            </button>
          </div>
        </fieldset>
      )}
      {isShow === true ? (
        <div onClick={handleHideShow}>Hide this form</div>
      ) : (
        <div onClick={handleHideShow}>Show this form</div>
      )}
      <div>
        List Product
        <div>{localStorage.getItem("productList")}</div>
      </div>
    </div>
  );
}

export default AddNewProduct;
