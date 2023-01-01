import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const { isOpen, onModalClose, children } = props;
  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center backdrop-blur-md"
      onClick={onModalClose}
    >
      <div
        className="max-h-3/4 max-w-3/4 h-3/4 w-3/4 shadow-xl flex flex-col rounded-lg z-50 overflow-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default Modal;
