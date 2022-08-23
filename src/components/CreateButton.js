import React, { Component, useState } from "react";

const ClickButton = (props) => {
  const [ClickBtn, setClickBtn] = React.useState(true);

  const OnClick = () => {
    setClickBtn(false);
  };

  return (
    <div>
      {ClickBtn ? (
        <button id="click" onClick={OnClick}> Click </button>
      ) : (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
    </div>
  );
};

export default ClickButton;
