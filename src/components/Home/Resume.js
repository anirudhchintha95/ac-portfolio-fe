import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { subHeadings } from "../../constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { Card, Modal } from "../common";
import SubHeadingContent from "./SubHeadingContent";

const Resume = (props) => {
  const { showCards } = props;

  const { width } = useWindowDimensions();

  const [selectedSubHeading, setSelectedSubHeading] = useState();

  const onSelectedSubHeadingChange = (newValue) => setSelectedSubHeading(newValue);
  const onCloseContent = () => onSelectedSubHeadingChange(null);

  useEffect(() => {
    if (!showCards) {
      onCloseContent();
    }
  }, [showCards]);

  return (
    <div className="h-full flex flex-col">
      <div
        className={cx(
          "grid gap-4 grid-cols-3 grid-rows-2",
          "pb-8",
          showCards ? "animate-fadeIn opacity-100" : "opacity-0"
        )}
      >
        {subHeadings.map((subHeading) => (
          <Card
            key={subHeading}
            className="h-24 cursor-pointer hover:scale-105 transition-all ease-linear duration-250"
            heading={subHeading}
            onCardClick={() => onSelectedSubHeadingChange(subHeading)}
          />
        ))}
      </div>
      {selectedSubHeading ? (
        width < 550 ? (
          <Modal onModalClose={onCloseContent}>
            <SubHeadingContent
              selectedSubHeading={selectedSubHeading}
              closeContent={onCloseContent}
            />
          </Modal>
        ) : (
          <SubHeadingContent
            selectedSubHeading={selectedSubHeading}
            closeContent={onCloseContent}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

Resume.propTypes = {
  showCards: PropTypes.bool.isRequired,
};

export default Resume;
