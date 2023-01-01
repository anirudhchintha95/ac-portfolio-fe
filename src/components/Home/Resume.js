import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { subHeadings } from "../../constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { Card, Modal } from "../common";
import SubHeadingContent from "./SubHeadingContent";
import MyDescription from "./MyDescription";

const Resume = (props) => {
  const { showCards } = props;

  const { width, height } = useWindowDimensions();

  const [selectedSubHeading, setSelectedSubHeading] = useState();
  const [showInModal, setShowInModal] = useState(false);
  const [showDescModal, setShowDescModal] = useState(false);

  const onSelectedSubHeadingChange = (newValue) => {
    setSelectedSubHeading(newValue);
    setShowInModal(false);
  };
  const onChangeOpenModal = () => setShowInModal((val) => !val);
  const onChangeShowDescModal = () => setShowDescModal((val) => !val);
  const onCloseContent = () => onSelectedSubHeadingChange(null);

  useEffect(() => {
    if (!showCards) {
      onCloseContent();
    }
  }, [showCards]);

  return (
    <div
      className={cx("h-full flex flex-col", showCards ? "animate-fadeIn opacity-100" : "opacity-0")}
    >
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
          <Modal isOpen={width < 550 || showInModal} onModalClose={onCloseContent}>
            <SubHeadingContent
              inModal
              showChangeModal={width >= 550}
              selectedSubHeading={selectedSubHeading}
              closeContent={onCloseContent}
              onChangeOpenModal={onChangeOpenModal}
            />
          </Modal>
        ) : (
          <SubHeadingContent
            showChangeModal
            selectedSubHeading={selectedSubHeading}
            closeContent={onCloseContent}
            onChangeOpenModal={onChangeOpenModal}
          />
        )
      ) : showDescModal || width < 550 || height < 800 ? (
        <>
          <Card
            className="cursor-pointer hover:scale-105 transition-all ease-linear duration-250 p-4"
            heading="I am a full stack developer with more than 5 years of experience. Click here to know more"
            onCardClick={onChangeShowDescModal}
          />
          <Modal isOpen={showDescModal} onModalClose={onChangeShowDescModal}>
            <MyDescription
              showMaxMinButton={!(width < 550 || height < 800)}
              showDescModal={showDescModal}
              onChangeOpenModal={onChangeShowDescModal}
              onCloseFolder={width < 550 || height < 800 ? onChangeShowDescModal : undefined}
              close
            />
          </Modal>
        </>
      ) : (
        <MyDescription
          showMaxMinButton
          showDescModal={showDescModal}
          onChangeOpenModal={onChangeShowDescModal}
        />
      )}
    </div>
  );
};

Resume.propTypes = {
  showCards: PropTypes.bool.isRequired,
};

export default Resume;
