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
  const [showInModal, setShowInModal] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const onSelectedSubHeadingChange = (newValue) => {
    setSelectedSubHeading(newValue);
    setCurrentItem();
  };
  const onChangeOpenModal = () => setShowInModal((val) => !val);
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
            selected={selectedSubHeading === subHeading}
          />
        ))}
      </div>
      {selectedSubHeading ? (
        width < 550 || showInModal ? (
          <Modal onModalClose={onCloseContent}>
            <SubHeadingContent
              inModal
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              showChangeModal={width >= 550}
              selectedSubHeading={selectedSubHeading}
              closeContent={onCloseContent}
              onChangeOpenModal={onChangeOpenModal}
            />
          </Modal>
        ) : (
          <SubHeadingContent
            showChangeModal
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            selectedSubHeading={selectedSubHeading}
            closeContent={onCloseContent}
            onChangeOpenModal={onChangeOpenModal}
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
