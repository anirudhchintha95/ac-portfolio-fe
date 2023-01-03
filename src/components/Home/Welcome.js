/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { FireEmoji, ThumbsUpEmpji } from "../../assets/gifs";
import { Button, LikeCode } from "../common";

const Welcome = (props) => {
  const { initialBtnClicked, onInitialButtonClick, showCards } = props;

  return (
    <div
      className={cx(
        "transition-all duration-1000 ease-in-out flex justify-center mb-8 mt-4",
        initialBtnClicked ? "w-full" : "w-auto"
      )}
    >
      <div className="transition-all duration-1000 ease-in-out rounded-md drop-shadow-lg border py-8 md:py-16 px-8 md:px-12 bg-gradient-to-r from-violet-50 to-violet-100 flex flex-col items-center justify-center w-full border-gray-300">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pb-8 text-center">
          Hi! I am Anirudh Chintha
        </h1>
        <Button
          onClick={onInitialButtonClick}
          loading={initialBtnClicked ? !showCards : showCards}
          className="min-h-[42px] w-auto"
        >
          <LikeCode
            text={initialBtnClicked ? "Close everything" : "Click here to know about me"}
            image={initialBtnClicked ? FireEmoji : ThumbsUpEmpji}
          />
        </Button>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  initialBtnClicked: PropTypes.bool.isRequired,
  onInitialButtonClick: PropTypes.func.isRequired,
  showCards: PropTypes.bool.isRequired,
};

export default Welcome;
