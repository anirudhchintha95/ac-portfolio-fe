import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const TextArea = (props) => {
  const { className, placeholder, label, error, required, ...rest } = props;
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
    <textarea
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

TextArea.propTypes = {
  className: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
};

export default TextArea;
