import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const FolderActionButton = (props) => {
  const { onClick, Icon, iconClass, className } = props;
  return (
    <div
      className={cx(
        "cursor-pointer border rounded-full h-7 w-7 flex items-center justify-center border-gray-300",
        className
      )}
      onClick={onClick}
    >
      <Icon className={iconClass} />
    </div>
  );
};

FolderActionButton.propTypes = {
  Icon: PropTypes.any.isRequired,
  iconClass: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.any,
};

export default FolderActionButton;
