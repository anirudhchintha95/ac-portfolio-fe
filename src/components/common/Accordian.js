import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Accordian = (props) => {
  const { isOpen, children, id, onClick, ...rest } = props;
  const arrayedChildren = React.Children.toArray(children);

  return (
    <div
      className="flex flex-col box-border px-4 border rounded-md shadow-md bg-slate-50 my-4 text-sm md:text-md justify-between cursor-pointer w-full"
      id={id}
      {...rest}
    >
      <div
        className={cx(
          "flex flex-row w-full items-center py-4",
          isOpen ? "border-b border-gray-300" : ""
        )}
        onClick={onClick}
      >
        <div className="flex-1 pl-4 flex flex-col md:justify-center">{arrayedChildren[0]}</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        className={cx(
          "transition-all ease-in-out duration-300 overflow-hidden",
          isOpen ? "p-4 max-h-56 overflow-scroll" : "max-h-0"
        )}
      >
        {arrayedChildren[1]}
      </div>
    </div>
  );
};

Accordian.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Accordian;
