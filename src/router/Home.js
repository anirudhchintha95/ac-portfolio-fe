import React, { useEffect, useState } from "react";
import cx from "classnames";

import { Welcome, Resume, Header, Footer } from "../components/Home";
import { SlPicture } from "react-icons/sl";

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
    <>
      <div
        className={cx(
          "fixed left-0 top-0 -z-10 h-screen w-screen",
          "bg-no-repeat bg-center bg-cover bg-fixed",
          "bg-[url(./assets/images/Manhattan.jpg)]",
          "transition-all ease-in-out duration-1000",
          initialBtnClicked ? "blur-xs opcaity-80" : ""
        )}
      >
        <div className="text-xs float-right p-2 pt-3 flex items-center text-gray-300">
          <SlPicture />
          <span className="ml-2">by Me</span>
        </div>
      </div>
      <div className="h-screen w-5/6 md:4/5 mx-auto">
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
              showCards={showCards}
              onInitialButtonClick={onInitialButtonClick}
            />
            {showCards ? <Resume showCards={showCards} /> : <></>}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
