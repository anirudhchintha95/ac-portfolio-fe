import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { subHeadings } from "../../constants";

import { Card } from "../common";
import SubHeadingContent from "./SubHeadingContent";

const Resume = (props) => {
  const { showCards } = props;

  const [selectedSubHeading, setSelectedSubHeading] = useState();

  useEffect(() => {
    if (!showCards) {
      setSelectedSubHeading();
    }
  }, [showCards]);

  return (
    <div className="h-full">
      <div
        className={cx(
          "grid gap-4 grid-cols-3 grid-rows-2",
          "pb-8 border-b-2",
          showCards ? "animate-fadeIn opacity-100" : "opacity-0"
        )}
      >
        {subHeadings.map((subHeading) => (
          <Card
            key={subHeading}
            className="h-24 cursor-pointer hover:scale-105 transition-all ease-linear duration-250"
            heading={subHeading}
            onCardClick={() => setSelectedSubHeading(subHeading)}
          />
        ))}
      </div>
      {selectedSubHeading ? <SubHeadingContent selectedSubHeading={selectedSubHeading} /> : <></>}
    </div>
  );
};

Resume.propTypes = {
  showCards: PropTypes.bool.isRequired,
};

export default Resume;
