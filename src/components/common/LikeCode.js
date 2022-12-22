import React from "react";
import PropTypes from "prop-types";
import { RxSlash } from "react-icons/rx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const LikeCode = (props) => {
  const { image, text } = props;
  return (
    <div className="flex justify-center items-center">
      <SlArrowLeft className="mr-1" />
      {text}
      {image ? <img src={image} className="h-6 ml-1" /> : <></>}
      <RxSlash />
      <SlArrowRight className="ml-1" />
    </div>
  );
};

LikeCode.propTypes = {
  image: PropTypes.any,
  text: PropTypes.string.isRequired,
};

export default LikeCode;
