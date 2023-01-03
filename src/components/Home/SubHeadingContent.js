import React from "react";
import PropTypes from "prop-types";

import { subHeadingsMapper } from "../../constants";

import { Folder } from "../common";
import Education from "./Education";
import AcademicProjects from "./AcademicProjects";
import WorkExperience from "./WorkExperience";
import Connect from "./Connect";

const ContentMapper = (props) => {
  switch (props.selectedSubHeading) {
    case subHeadingsMapper.education:
      return <Education />;
    case subHeadingsMapper.academicProjects:
      return <AcademicProjects />;
    case subHeadingsMapper.workExperience:
      return <WorkExperience />;
    case subHeadingsMapper.connect:
      return <Connect />;
    default:
      return <></>;
  }
};

ContentMapper.propTypes = {
  selectedSubHeading: PropTypes.string,
};

const SubHeadingContent = (props) => {
  const { selectedSubHeading, showChangeModal, inModal, closeContent, onChangeOpenModal } = props;

  return (
    <Folder
      heading={selectedSubHeading}
      showMaxMinButton={showChangeModal}
      folderMaxed={inModal}
      onMaxMinFolder={onChangeOpenModal}
      onCloseFolder={closeContent}
    >
      <ContentMapper selectedSubHeading={selectedSubHeading} />
    </Folder>
  );
};

SubHeadingContent.propTypes = {
  selectedSubHeading: PropTypes.string,
  closeContent: PropTypes.func.isRequired,
  showChangeModal: PropTypes.bool,
  inModal: PropTypes.bool,
  onChangeOpenModal: PropTypes.func.isRequired,
};

export default SubHeadingContent;
