import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import Loader from "./Loader";

const Button = (props) => {
  const { children, className, loading, disabled, ...rest } = props;

  return (
    <button
      {...rest}
      className={cx(
        "py-2 px-8 box-border border border-gray-300 rounded-md bg-white w-full shadow-lg hover:shadow-xl uppercase font-bold text-violet-500",
        "flex justify-center items-center",
        disabled ? "opacity-40 cursor-not-allowed" : "",
        className
      )}
      disabled={disabled}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
