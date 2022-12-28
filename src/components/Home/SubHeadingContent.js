import React from "react";
import PropTypes from "prop-types";

import { subHeadingsMapper } from "../../constants";

import { Folder } from "../common";
import Education from "./Education";
import AcademicProjects from "./AcademicProjects";
import WorkExperience from "./WorkExperience";

const ContentMapper = (props) => {
  switch (props.selectedSubHeading) {
    case subHeadingsMapper.education:
      return <Education />;
    case subHeadingsMapper.academicProjects:
      return <AcademicProjects />;
    case subHeadingsMapper.workExperience:
      return <WorkExperience {...props} />;
    default:
      return <></>;
  }
};

ContentMapper.propTypes = {
  selectedSubHeading: PropTypes.string,
  currentItem: PropTypes.any,
  setCurrentItem: PropTypes.func.isRequired,
};

const SubHeadingContent = (props) => {
  const {
    selectedSubHeading,
    showChangeModal,
    inModal,
    closeContent,
    onChangeOpenModal,
    currentItem,
    setCurrentItem,
  } = props;

  return (
    <Folder
      heading={selectedSubHeading}
      showMaxMinButton={showChangeModal}
      folderMaxed={inModal}
      onMaxMinFolder={onChangeOpenModal}
      onCloseFolder={closeContent}
      showBackButton={!!currentItem}
      onBackButtonClick={() => setCurrentItem()}
    >
      <ContentMapper
        selectedSubHeading={selectedSubHeading}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </Folder>
  );
};

SubHeadingContent.propTypes = {
  selectedSubHeading: PropTypes.string,
  closeContent: PropTypes.func.isRequired,
  showChangeModal: PropTypes.bool,
  inModal: PropTypes.bool,
  onChangeOpenModal: PropTypes.func.isRequired,
  currentItem: PropTypes.any,
  setCurrentItem: PropTypes.func.isRequired,
};

export default SubHeadingContent;
