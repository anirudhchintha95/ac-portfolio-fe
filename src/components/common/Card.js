import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import LikeCode from "./LikeCode";

const Card = (props) => {
  const { className, heading, selected, onCardClick } = props;

  return (
    <div
      className={cx(
        "box-border rounded-xl shadow-lg bg-gradient-to-r from-violet-50 to-violet-100",
        "flex flex-col items-center justify-center flex-wrap border",
        selected ? "border-neutral-900" : "border-gray-300",
        className
      )}
      onClick={onCardClick}
    >
      <h1
        className={cx(
          "text-sm md:text-md lg:text-xl font-bold text-center",
          selected ? "border-b-2 border-neutral-900" : ""
        )}
      >
        <LikeCode text={heading} />
      </h1>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.any,
  heading: PropTypes.string.isRequired,
  onCardClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default Card;
