import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

export default function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);
  return (
    <Fade bottom delay={props.delayInMS}>
      <div className={className.join(" ")}>
        <div
          className={`tiles-item-inner ${props.hasShadow ? "has-shadow" : ""}`}
        >
          {props.children}
        </div>
      </div>
    </Fade>
  );
}

Card.propTypes = {
  hasShadow: propTypes.bool,
  className: propTypes.string,
  delayInMS: propTypes.number,
};
