import React, { useState } from "react";

const fruits = [
  {
    tittle: "Apple",
    isApple: true,
    id: 1,
  },
  {
    tittle: "Orange",
    isOrange: true,
    id: 2,
  },
  {
    tittle: "Banana",
    isBanana: true,
    id: 3,
  },
];

const Dummy = () => {
  const styleImg = {
    imageSize: 200,
    round: "50%",
  };
  const listItem = fruits.map((i) => (
    <li
      key={i.id}
      style={{
        color:
          (i.isApple && "red") ||
          (i.isBanana && "yellowgreen") ||
          (i.isOrange && "orange"),
      }}
    >
      {i.tittle}
    </li>
  ));
  const [value, setValue] = useState("");
  const handleClick = () => {
    setValue("X");
  };

  return (
    <div>
      <img
        src="https://images.pexels.com/photos/19152941/pexels-photo-19152941/free-photo-of-sonbahar-yaprak.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        style={{
          width: styleImg.imageSize,
          height: styleImg.imageSize,
          borderRadius: styleImg.round,
        }}
      />
      <ul>{listItem}</ul>
      <button
        style={{
          background: "black",
          color: "white",
          textAlign: "center",
          fontSize:"4em",
          width:"100px",
          height:"100px",
        }}
        onClick={handleClick}
      >
        {value}
      </button>
    <div>
    <form>
          
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
        </form>
    </div>
    </div>
  );
};

export default Dummy;
