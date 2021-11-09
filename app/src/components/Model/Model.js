import React from "react";
import "./Model.scss";

const Model = (props) => {
  const findByKey = (name) =>
    props.children.map((child) => {
      if (child.key === name) return child;
    });

  return (
    <div className="model-mask model-close">
      <div className="model-wrapper">
        <div className="model-container">
          <div className="model-header">{findByKey("header")}</div>
          <div className="model-body">{findByKey("body")}</div>
          <div className="model-footer">{findByKey("footer")}</div>
        </div>
      </div>
    </div>
  );
};

export default Model;
