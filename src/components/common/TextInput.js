/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const TextInput = (props) => {
  const { className, placeholder, label, required, error, ...rest } = props;
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);

  useEffect(() => {
    let timer;
    if (error) {
      setShowErrorAnimation(true);
      timer = setTimeout(() => setShowErrorAnimation(false), 1000);
    }
    return () => {
      if (timer) {
        timer = null;
        setShowErrorAnimation(false);
      }
    };
  }, [error]);

  return (
    <input
      {...rest}
      className={cx(
        "box-border rounded-md border border-gray-300 m-4 p-2 focus:shadow-xl focus:border-violet-300 focus:border-2 outline-none",
        showErrorAnimation ? "animate-shake" : "",
        error ? "border-red-300 border-2" : "",
        className
      )}
      placeholder={`${required ? "*" : ""}${placeholder || label}`}
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
};

export default TextInput;
