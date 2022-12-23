import React from "react";
import PropTypes from "prop-types";
import { RxSlash } from "react-icons/rx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const LikeCode = (props) => {
  const { image, text } = props;
  const { width } = useWindowDimensions();

  const hideBrackets = width < 550;

  return (
    <div className="flex justify-center items-center">
      {hideBrackets ? <></> : <SlArrowLeft className="mr-1" />}
      <div className="break-words flex items-center">
        {text}
        {image ? <img src={image} className="h-6 ml-1" /> : <></>}
      </div>
      {hideBrackets ? (
        <></>
      ) : (
        <div className="flex">
          <RxSlash />
          <SlArrowRight className="ml-1" />
        </div>
      )}
    </div>
  );
};

LikeCode.propTypes = {
  image: PropTypes.any,
  text: PropTypes.string.isRequired,
};

export default LikeCode;
