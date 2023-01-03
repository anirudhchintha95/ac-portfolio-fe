import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";
import { TbMinimize, TbMaximize } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";

import LikeCode from "../LikeCode";
import FolderActionButton from "./FolderActionButton";

const Folder = (props) => {
  const {
    heading,
    showMaxMinButton,
    folderMaxed,
    onMaxMinFolder,
    onCloseFolder,
    showBackButton,
    onBackButtonClick,
    children,
  } = props;
  return (
    <div
      className={cx(
        "flex-1 w-full relative bg-gradient-to-l from-violet-50 to-violet-100",
        "rounded-lg border border-gray-300 shadow-lg",
        "flex flex-col",
        "animate-fadeIn opacity-100"
      )}
    >
      <div className="h-12 flex items-center justify-center bg-white rounded-t-lg">
        <div className="absolute top-2 left-4 flex items-center justify-start">
          {showBackButton ? (
            <FolderActionButton onClick={onBackButtonClick} Icon={IoIosArrowBack} />
          ) : (
            <></>
          )}
        </div>
        <div className="text-md md:lg lg:text-xl font-bold text-center">
          <LikeCode text={heading} />
        </div>
        <div className="absolute top-2 right-4 flex items-center justify-end">
          {showMaxMinButton ? (
            <FolderActionButton
              onClick={onMaxMinFolder}
              className="mr-2"
              Icon={folderMaxed ? TbMinimize : TbMaximize}
            />
          ) : (
            <></>
          )}
          {onCloseFolder ? <FolderActionButton onClick={onCloseFolder} Icon={RxCross1} /> : <></>}
        </div>
      </div>

      <div className="flex-1 px-8 overflow-scroll">{children}</div>
    </div>
  );
};

Folder.propTypes = {
  heading: PropTypes.string.isRequired,
  showMaxMinButton: PropTypes.bool,
  onBackButtonClick: PropTypes.func,
  folderMaxed: PropTypes.bool,
  showBackButton: PropTypes.bool,
  onMaxMinFolder: PropTypes.func,
  onCloseFolder: PropTypes.func,
  children: PropTypes.any,
};

export default Folder;
