import React from "react";
import PropTypes from "prop-types";

import { Folder } from "../common";

const MyDescription = (props) => {
  const { showMaxMinButton, showDescModal, onChangeOpenModal, onCloseFolder } = props;
  return (
    <Folder
      heading="You found me!"
      showMaxMinButton={showMaxMinButton}
      folderMaxed={showDescModal}
      onMaxMinFolder={onChangeOpenModal}
      onCloseFolder={onCloseFolder}
    >
      My description
    </Folder>
  );
};

MyDescription.propTypes = {
  showMaxMinButton: PropTypes.bool,
  showDescModal: PropTypes.bool,
  onChangeOpenModal: PropTypes.func,
  onCloseFolder: PropTypes.func,
};

export default MyDescription;
