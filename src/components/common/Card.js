import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import LikeCode from "./LikeCode";

const Card = (props) => {
  const { className, heading, onCardClick } = props;

  return (
    <div
      className={cx(
        className,
        "border-box rounded-xl shadow-lg bg-gradient-to-r from-violet-50 to-violet-100 flex flex-col items-center justify-center"
      )}
      onClick={onCardClick}
    >
      <h1 className="text-md md:lg lg:text-xl font-bold text-center">
        <LikeCode text={heading} />
      </h1>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.any,
  heading: PropTypes.string.isRequired,
  onCardClick: PropTypes.func,
};

export default Card;