import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { RxCross1 } from "react-icons/rx";

import { subHeadingsMapper } from "../../constants";

import { LikeCode } from "../common";
import Education from "./Education";

const SubHeadingContent = (props) => {
  const { selectedSubHeading, closeContent } = props;

  return (
    <div
      className={cx(
        "flex-1 w-full relative bg-gradient-to-l from-violet-50 to-violet-100 rounded-lg",
        "flex flex-col"
      )}
    >
      <div className="h-12 flex items-center justify-center">
        <div className="text-md md:lg lg:text-xl font-bold text-center">
          <LikeCode text={selectedSubHeading} />
        </div>
        <RxCross1 className="absolute top-4 right-4 cursor-pointer" onClick={closeContent} />
      </div>

      <div className="flex-1 px-8">
        {selectedSubHeading === subHeadingsMapper.education ? <Education /> : <></>}
      </div>
    </div>
  );
};

SubHeadingContent.propTypes = {
  selectedSubHeading: PropTypes.string,
  closeContent: PropTypes.func.isRequired,
};

export default SubHeadingContent;
