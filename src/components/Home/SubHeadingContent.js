import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";

const SubHeadingContent = (props) => {
  const { selectedSubHeading } = props;
  return <div className="h-full">{selectedSubHeading}</div>;
};

SubHeadingContent.propTypes = {
  selectedSubHeading: PropTypes.string,
};

export default SubHeadingContent;
