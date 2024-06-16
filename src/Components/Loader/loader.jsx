import React, { useEffect, useState } from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="overlay">
      <div className="loader">
        <img
          src="https://images.typeform.com/images/LztDQu9MkiiN"
          alt="Buildform Logo"
          className="loader-image"
        />
        <div class="loader-icon"></div>
      </div>
    </div>
  );
};

export default Loader;
