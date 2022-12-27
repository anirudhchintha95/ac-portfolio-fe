import React, { useEffect, useState } from "react";
import cx from "classnames";

import { Welcome, Resume, Header, Footer } from "../components/Home";

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
        <Header />
        <div className="flex w-full flex-col flex-1">
          <div
            className={cx(
              "transition-all ease-in-out duration-1000",
              initialBtnClicked ? "h-0" : "h-1/4"
            )}
          ></div>
          <Welcome
            initialBtnClicked={initialBtnClicked}
            onInitialButtonClick={onInitialButtonClick}
          />
          {showCards ? <Resume showCards={showCards} /> : <></>}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
