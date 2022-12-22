import React, { useEffect, useState } from "react";
import cx from "classnames";

import { Welcome, Resume } from "../components/Home";

const Home = () => {
  const [initialBtnClicked, setInitialBtnClicked] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const onInitialButtonClick = () => {
    if (initialBtnClicked) {
      setShowCards(false);
    }
    setInitialBtnClicked((state) => !state);
  };

  useEffect(() => {
    let timer;
    if (initialBtnClicked) {
      timer = setTimeout(() => setShowCards(true), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [initialBtnClicked]);

  return (
    <div className="h-screen w-4/5 mx-auto">
      <div className="h-screen w-full flex flex-col items-center">
        <div className="h-12 flex items-center justify-center">Header</div>
        <div
          className={cx(
            "transition-all ease-in-out duration-1000",
            initialBtnClicked ? "h-0" : "h-1/4"
          )}
        ></div>
        <div className="flex justify-center w-full flex-col">
          <Welcome
            initialBtnClicked={initialBtnClicked}
            onInitialButtonClick={onInitialButtonClick}
          />
          <Resume showCards={showCards} />
        </div>
      </div>
    </div>
  );
};

export default Home;
